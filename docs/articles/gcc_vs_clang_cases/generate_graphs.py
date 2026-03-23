#!/usr/bin/env python3

from __future__ import annotations

import json
from pathlib import Path
from xml.sax.saxutils import escape


ROOT = Path(__file__).resolve().parent
RESULTS = ROOT / "batch_results"
GRAPHS = ROOT / "graphs"

CASES = [
    ("branch_threshold", "Branch-heavy loop"),
    ("stride_access", "Strided access"),
    ("rolling_hash", "Rolling hash"),
    ("row_sum", "Row-major traversal"),
    ("column_sum", "Column-major traversal"),
    ("small_sort", "Small sort"),
    ("prefix_sum", "Prefix sum"),
    ("bit_mix", "Bit mix"),
    ("indirect_index", "Indirect gather"),
    ("stencil_2d", "2D stencil"),
]

GCC_COLOR = "#d97706"
CLANG_COLOR = "#2563eb"
GRID_COLOR = "#d1d5db"
TEXT_COLOR = "#111827"
SUBTLE_COLOR = "#6b7280"
BG_COLOR = "#ffffff"

COUNTER_SPECS = [
    ("ipc", "IPC Across All 10 Workloads", "Higher is better"),
    ("instruction_count", "Instruction Count Across All 10 Workloads", "Lower is better"),
    ("cache_misses", "Cache Misses Across All 10 Workloads", "Lower is better"),
    ("branch_mispredictions", "Branch Mispredictions Across All 10 Workloads", "Lower is better"),
]


def load_result(path: Path) -> dict:
    return json.loads(path.read_text())


def get_runs(payload: dict) -> list[float]:
    trials = payload["execution"]["trial_results"]
    return [float(item["wall_time_ms"]) for item in trials]


def get_mean(payload: dict) -> float:
    return float(payload["metrics"]["execution_time_ms"])


def get_metric(payload: dict, metric: str) -> float:
    if metric == "ipc":
        instructions = float(payload["metrics"]["instruction_count"])
        cycles = float(payload["metrics"]["cpu_cycles"])
        return instructions / cycles if cycles else 0.0
    return float(payload["metrics"][metric])


def fmt_ms(value: float) -> str:
    return f"{value:.3f} ms"


def svg_header(width: int, height: int) -> str:
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" '
        f'viewBox="0 0 {width} {height}" role="img">'
        f'<rect width="{width}" height="{height}" fill="{BG_COLOR}"/>'
    )


def svg_footer() -> str:
    return "</svg>"


def generate_case_svg(case_id: str, title: str, gcc: dict, clang: dict) -> str:
    width = 980
    height = 520
    left = 90
    right = 40
    top = 80
    bottom = 90
    plot_w = width - left - right
    plot_h = height - top - bottom

    gcc_runs = get_runs(gcc)
    clang_runs = get_runs(clang)
    max_val = max(max(gcc_runs), max(clang_runs))
    min_val = 0.0

    parts = [svg_header(width, height)]
    parts.append(
        f'<text x="{left}" y="36" font-size="28" font-weight="700" fill="{TEXT_COLOR}">{escape(title)}</text>'
    )
    parts.append(
        f'<text x="{left}" y="60" font-size="15" fill="{SUBTLE_COLOR}">Per-run runtime across 5 measured runs</text>'
    )

    # Grid + axis labels
    for i in range(6):
        y = top + (plot_h * i / 5.0)
        value = max_val * (1 - i / 5.0)
        parts.append(
            f'<line x1="{left}" y1="{y:.1f}" x2="{left + plot_w}" y2="{y:.1f}" stroke="{GRID_COLOR}" stroke-width="1"/>'
        )
        parts.append(
            f'<text x="{left - 12}" y="{y + 5:.1f}" text-anchor="end" font-size="12" fill="{SUBTLE_COLOR}">{value:.1f}</text>'
        )

    bar_group_w = plot_w / len(gcc_runs)
    bar_w = bar_group_w * 0.28
    gap = bar_group_w * 0.08

    for i, (g, c) in enumerate(zip(gcc_runs, clang_runs), start=1):
        gx = left + (i - 1) * bar_group_w + (bar_group_w / 2.0) - bar_w - gap / 2.0
        cx = left + (i - 1) * bar_group_w + (bar_group_w / 2.0) + gap / 2.0
        gh = 0 if max_val == 0 else (g / max_val) * plot_h
        ch = 0 if max_val == 0 else (c / max_val) * plot_h
        gy = top + plot_h - gh
        cy = top + plot_h - ch
        parts.append(f'<rect x="{gx:.1f}" y="{gy:.1f}" width="{bar_w:.1f}" height="{gh:.1f}" fill="{GCC_COLOR}" rx="4"/>')
        parts.append(f'<rect x="{cx:.1f}" y="{cy:.1f}" width="{bar_w:.1f}" height="{ch:.1f}" fill="{CLANG_COLOR}" rx="4"/>')
        parts.append(
            f'<text x="{left + (i - 1) * bar_group_w + bar_group_w / 2.0:.1f}" y="{top + plot_h + 24}" text-anchor="middle" font-size="12" fill="{TEXT_COLOR}">Run {i}</text>'
        )

    # Mean labels
    gcc_mean = get_mean(gcc)
    clang_mean = get_mean(clang)
    winner = "GCC" if gcc_mean < clang_mean else "Clang"
    lead_pct = abs((gcc_mean - clang_mean) / max(gcc_mean, clang_mean) * 100.0)
    parts.append(
        f'<text x="{left}" y="{height - 42}" font-size="14" fill="{TEXT_COLOR}">GCC mean: {fmt_ms(gcc_mean)}</text>'
    )
    parts.append(
        f'<text x="{left + 240}" y="{height - 42}" font-size="14" fill="{TEXT_COLOR}">Clang mean: {fmt_ms(clang_mean)}</text>'
    )
    parts.append(
        f'<text x="{left + 520}" y="{height - 42}" font-size="14" font-weight="700" fill="{TEXT_COLOR}">Winner: {winner} ({lead_pct:.2f}%)</text>'
    )

    # Legend
    legend_y = height - 18
    parts.append(f'<rect x="{left}" y="{legend_y - 10}" width="14" height="14" fill="{GCC_COLOR}" rx="2"/>')
    parts.append(f'<text x="{left + 22}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">GCC</text>')
    parts.append(f'<rect x="{left + 90}" y="{legend_y - 10}" width="14" height="14" fill="{CLANG_COLOR}" rx="2"/>')
    parts.append(f'<text x="{left + 112}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">Clang</text>')

    parts.append(svg_footer())
    return "".join(parts)


def generate_summary_svg(rows: list[tuple[str, float, float]]) -> str:
    width = 1200
    row_h = 44
    header_h = 100
    footer_h = 60
    left = 260
    right = 120
    plot_w = width - left - right
    height = header_h + footer_h + row_h * len(rows)
    max_val = max(max(g, c) for _, g, c in rows)

    parts = [svg_header(width, height)]
    parts.append(
        f'<text x="{left}" y="38" font-size="30" font-weight="700" fill="{TEXT_COLOR}">GCC vs Clang Across All 10 Workloads</text>'
    )
    parts.append(
        f'<text x="{left}" y="64" font-size="15" fill="{SUBTLE_COLOR}">Mean runtime in milliseconds; lower is better</text>'
    )

    for i in range(6):
        x = left + plot_w * i / 5.0
        label = max_val * i / 5.0
        parts.append(f'<line x1="{x:.1f}" y1="{header_h - 10}" x2="{x:.1f}" y2="{height - footer_h}" stroke="{GRID_COLOR}" stroke-width="1"/>')
        parts.append(f'<text x="{x:.1f}" y="{height - 18}" text-anchor="middle" font-size="12" fill="{SUBTLE_COLOR}">{label:.0f}</text>')

    for idx, (label, gcc_mean, clang_mean) in enumerate(rows):
        y = header_h + idx * row_h + 12
        parts.append(f'<text x="{left - 14}" y="{y + 14}" text-anchor="end" font-size="13" fill="{TEXT_COLOR}">{escape(label)}</text>')
        gcc_w = (gcc_mean / max_val) * plot_w
        clang_w = (clang_mean / max_val) * plot_w
        parts.append(f'<rect x="{left}" y="{y - 6}" width="{gcc_w:.1f}" height="12" fill="{GCC_COLOR}" rx="3"/>')
        parts.append(f'<rect x="{left}" y="{y + 10}" width="{clang_w:.1f}" height="12" fill="{CLANG_COLOR}" rx="3"/>')
        parts.append(f'<text x="{left + gcc_w + 8:.1f}" y="{y + 4}" font-size="11" fill="{TEXT_COLOR}">{gcc_mean:.2f}</text>')
        parts.append(f'<text x="{left + clang_w + 8:.1f}" y="{y + 20}" font-size="11" fill="{TEXT_COLOR}">{clang_mean:.2f}</text>')

    legend_y = 74
    parts.append(f'<rect x="{width - 190}" y="{legend_y - 10}" width="14" height="14" fill="{GCC_COLOR}" rx="2"/>')
    parts.append(f'<text x="{width - 168}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">GCC</text>')
    parts.append(f'<rect x="{width - 120}" y="{legend_y - 10}" width="14" height="14" fill="{CLANG_COLOR}" rx="2"/>')
    parts.append(f'<text x="{width - 98}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">Clang</text>')
    parts.append(svg_footer())
    return "".join(parts)


def generate_metric_summary_svg(rows: list[tuple[str, float, float]], title: str, subtitle: str) -> str:
    width = 1200
    row_h = 44
    header_h = 100
    footer_h = 60
    left = 260
    right = 120
    plot_w = width - left - right
    height = header_h + footer_h + row_h * len(rows)
    max_val = max(max(g, c) for _, g, c in rows) or 1.0

    parts = [svg_header(width, height)]
    parts.append(
        f'<text x="{left}" y="38" font-size="30" font-weight="700" fill="{TEXT_COLOR}">{escape(title)}</text>'
    )
    parts.append(
        f'<text x="{left}" y="64" font-size="15" fill="{SUBTLE_COLOR}">{escape(subtitle)}</text>'
    )

    for i in range(6):
        x = left + plot_w * i / 5.0
        label = max_val * i / 5.0
        label_text = f"{label:.2f}" if max_val < 100 else f"{label:.0f}"
        parts.append(f'<line x1="{x:.1f}" y1="{header_h - 10}" x2="{x:.1f}" y2="{height - footer_h}" stroke="{GRID_COLOR}" stroke-width="1"/>')
        parts.append(f'<text x="{x:.1f}" y="{height - 18}" text-anchor="middle" font-size="12" fill="{SUBTLE_COLOR}">{label_text}</text>')

    for idx, (label, gcc_val, clang_val) in enumerate(rows):
        y = header_h + idx * row_h + 12
        parts.append(f'<text x="{left - 14}" y="{y + 14}" text-anchor="end" font-size="13" fill="{TEXT_COLOR}">{escape(label)}</text>')
        gcc_w = (gcc_val / max_val) * plot_w
        clang_w = (clang_val / max_val) * plot_w
        parts.append(f'<rect x="{left}" y="{y - 6}" width="{gcc_w:.1f}" height="12" fill="{GCC_COLOR}" rx="3"/>')
        parts.append(f'<rect x="{left}" y="{y + 10}" width="{clang_w:.1f}" height="12" fill="{CLANG_COLOR}" rx="3"/>')
        gcc_text = f"{gcc_val:.2f}" if max_val < 100 else f"{gcc_val:.0f}"
        clang_text = f"{clang_val:.2f}" if max_val < 100 else f"{clang_val:.0f}"
        parts.append(f'<text x="{left + gcc_w + 8:.1f}" y="{y + 4}" font-size="11" fill="{TEXT_COLOR}">{gcc_text}</text>')
        parts.append(f'<text x="{left + clang_w + 8:.1f}" y="{y + 20}" font-size="11" fill="{TEXT_COLOR}">{clang_text}</text>')

    legend_y = 74
    parts.append(f'<rect x="{width - 190}" y="{legend_y - 10}" width="14" height="14" fill="{GCC_COLOR}" rx="2"/>')
    parts.append(f'<text x="{width - 168}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">GCC</text>')
    parts.append(f'<rect x="{width - 120}" y="{legend_y - 10}" width="14" height="14" fill="{CLANG_COLOR}" rx="2"/>')
    parts.append(f'<text x="{width - 98}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">Clang</text>')
    parts.append(svg_footer())
    return "".join(parts)


def generate_winner_heatmap(rows: list[tuple[str, float, float]]) -> str:
    width = 1100
    row_h = 46
    header_h = 90
    footer_h = 40
    left = 260
    height = header_h + footer_h + row_h * len(rows)

    parts = [svg_header(width, height)]
    parts.append(
        f'<text x="{left}" y="36" font-size="30" font-weight="700" fill="{TEXT_COLOR}">Winner Heatmap Across 10 Workloads</text>'
    )
    parts.append(
        f'<text x="{left}" y="62" font-size="15" fill="{SUBTLE_COLOR}">Green = lower runtime for GCC, Blue = lower runtime for Clang, Gray = practical tie (&lt;1%)</text>'
    )

    for idx, (label, gcc_mean, clang_mean) in enumerate(rows):
        y = header_h + idx * row_h
        delta = abs(gcc_mean - clang_mean) / max(gcc_mean, clang_mean) * 100.0 if max(gcc_mean, clang_mean) else 0.0
        if delta < 1.0:
            color = "#9ca3af"
            winner = "Tie"
        elif gcc_mean < clang_mean:
            color = "#16a34a"
            winner = "GCC"
        else:
            color = "#2563eb"
            winner = "Clang"
        parts.append(f'<text x="{left - 14}" y="{y + 28}" text-anchor="end" font-size="13" fill="{TEXT_COLOR}">{escape(label)}</text>')
        parts.append(f'<rect x="{left}" y="{y + 8}" width="420" height="24" fill="{color}" rx="6"/>')
        parts.append(f'<text x="{left + 12}" y="{y + 25}" font-size="13" fill="#ffffff">{winner}</text>')
        parts.append(f'<text x="{left + 360}" y="{y + 25}" font-size="12" fill="#ffffff">{delta:.2f}%</text>')

    legend_y = height - 18
    parts.append(f'<rect x="{left}" y="{legend_y - 10}" width="14" height="14" fill="#16a34a" rx="2"/>')
    parts.append(f'<text x="{left + 22}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">GCC win</text>')
    parts.append(f'<rect x="{left + 100}" y="{legend_y - 10}" width="14" height="14" fill="#2563eb" rx="2"/>')
    parts.append(f'<text x="{left + 122}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">Clang win</text>')
    parts.append(f'<rect x="{left + 220}" y="{legend_y - 10}" width="14" height="14" fill="#9ca3af" rx="2"/>')
    parts.append(f'<text x="{left + 242}" y="{legend_y + 2}" font-size="13" fill="{TEXT_COLOR}">Tie</text>')
    parts.append(svg_footer())
    return "".join(parts)


def main() -> None:
    GRAPHS.mkdir(parents=True, exist_ok=True)
    summary_rows: list[tuple[str, float, float]] = []
    metric_rows: dict[str, list[tuple[str, float, float]]] = {metric: [] for metric, _, _ in COUNTER_SPECS}

    for case_id, title in CASES:
        gcc = load_result(RESULTS / f"{case_id}-gcc.json")
        clang = load_result(RESULTS / f"{case_id}-clang.json")
        svg = generate_case_svg(case_id, title, gcc, clang)
        (GRAPHS / f"{case_id}.svg").write_text(svg)
        summary_rows.append((title, get_mean(gcc), get_mean(clang)))
        for metric, _, _ in COUNTER_SPECS:
            metric_rows[metric].append((title, get_metric(gcc, metric), get_metric(clang, metric)))

    summary_svg = generate_summary_svg(summary_rows)
    (GRAPHS / "all_workloads.svg").write_text(summary_svg)
    for metric, title, subtitle in COUNTER_SPECS:
        svg = generate_metric_summary_svg(metric_rows[metric], title, subtitle)
        (GRAPHS / f"{metric}_all_workloads.svg").write_text(svg)
    heatmap_svg = generate_winner_heatmap(summary_rows)
    (GRAPHS / "winner_heatmap.svg").write_text(heatmap_svg)


if __name__ == "__main__":
    main()
