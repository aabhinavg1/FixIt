import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './PipelineAnimation.module.css';

const stageOrder = ['FETCH', 'DECODE', 'EXECUTE', 'WRITEBACK'];
const stageDescriptions = {
  FETCH: 'reads instruction bytes',
  DECODE: 'identifies operation and operands',
  EXECUTE: 'runs ALU / load / branch work',
  WRITEBACK: 'makes the result visible',
};

const legend = [
  { label: 'Active instruction', className: styles.stateActive },
  { label: 'Cache miss', className: styles.stateMiss },
  { label: 'Stalled stage', className: styles.stateStall },
  { label: 'Recovered / ready', className: styles.stateReady },
];

const sharedProgram = [
  { name: 'Load', asm: 'mov eax, [rdi]', role: 'loads data from memory into eax' },
  { name: 'Add', asm: 'add eax, 5', role: 'adds 5 to the loaded value' },
  { name: 'Store', asm: 'mov [rsi], eax', role: 'stores the result back to memory' },
  { name: 'Compare', asm: 'cmp eax, edx', role: 'compares the result with another value' },
  { name: 'Branch', asm: 'jne label', role: 'changes control flow if compare says values differ' },
];

const scenarios = {
  normal: {
    title: 'Pipeline Animation: Normal Flow',
    subtitle:
      'Instructions advance one stage per cycle. Once the pipeline fills, every stage is busy and one instruction completes each cycle.',
    badge: 'Normal Execution',
    caption:
      'This is the baseline movie for the article. Pipelining does not shorten one instruction. It overlaps many instructions so throughput rises after the fill phase.',
    textSummary:
      'Text summary: in the normal case, the same five instructions move forward one stage per cycle. After the pipeline fills, the CPU keeps multiple instructions in flight at once and finishes about one instruction each cycle in this simplified model.',
    programTitle: 'One fixed example program used in all animations',
    program: sharedProgram,
    watchTitle: 'What to watch',
    watchItems: [
      'The same instruction moves from Fetch to Decode to Execute to Writeback.',
      'No stage is blocked, so one instruction advances every cycle.',
      'This is the reference case. The same five instructions are reused in the stall animations below.',
    ],
    frames: [
      frame('Cycle 1', 'Pipeline fill begins.', 'Load enters Fetch.', [
        cell('FETCH', 'Load', 'active', 'first instruction enters'),
        empty('DECODE'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 2', 'The second instruction enters while the first moves to Decode.', 'Load moved to Decode. Add entered Fetch.', [
        cell('FETCH', 'Add', 'active', 'new fetch'),
        cell('DECODE', 'Load', 'active', 'bytes decoded'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 3', 'Three instructions are now in flight.', 'Load reached Execute. Add moved to Decode. Store entered Fetch.', [
        cell('FETCH', 'Store', 'active', 'store enters'),
        cell('DECODE', 'Add', 'active', 'operand decode'),
        cell('EXECUTE', 'Load', 'active', 'address + load'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 4', 'Steady state begins.', 'Load reached Writeback. Add is in Execute. Store is in Decode. Compare entered Fetch.', [
        cell('FETCH', 'Compare', 'active', 'compare enters'),
        cell('DECODE', 'Store', 'active', 'store decode'),
        cell('EXECUTE', 'Add', 'active', 'ALU add'),
        cell('WRITEBACK', 'Load', 'active', 'register update'),
      ]),
      frame('Cycle 5', 'Every stage remains occupied.', 'Add reached Writeback. Store is in Execute. Compare moved to Decode. Branch entered Fetch.', [
        cell('FETCH', 'Branch', 'active', 'branch fetch'),
        cell('DECODE', 'Compare', 'active', 'flag source decode'),
        cell('EXECUTE', 'Store', 'active', 'address generation'),
        cell('WRITEBACK', 'Add', 'active', 'sum committed'),
      ]),
      frame('Cycle 6', 'The pipeline continues to retire one instruction per cycle.', 'Store reached Writeback. Compare is in Execute. Branch moved to Decode. Fetch is now waiting for the next loop iteration.', [
        empty('FETCH'),
        cell('DECODE', 'Branch', 'active', 'branch decode'),
        cell('EXECUTE', 'Compare', 'active', 'flags set'),
        cell('WRITEBACK', 'Store', 'active', 'store path updated'),
      ]),
      frame('Cycle 7', 'The last control instruction moves forward.', 'Compare reached Writeback. Branch is now in Execute.', [
        empty('FETCH'),
        empty('DECODE'),
        cell('EXECUTE', 'Branch', 'active', 'branch resolve'),
        cell('WRITEBACK', 'Compare', 'active', 'flags visible'),
      ]),
      frame('Cycle 8', 'Final busy frame before draining.', 'Branch reached Writeback. No other instruction from this example program remains in flight.', [
        empty('FETCH'),
        empty('DECODE'),
        empty('EXECUTE'),
        cell('WRITEBACK', 'Branch', 'active', 'branch outcome committed'),
      ]),
      frame('Cycle 9', 'The pipeline is now empty.', 'The five-instruction example program has finished this pass through the pipeline.', [
        empty('FETCH'),
        empty('DECODE'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 10', 'Ready to restart.', 'If the loop repeats, Fetch will begin again with Load from the same program.', [
        empty('FETCH'),
        empty('DECODE'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
    ],
    timeline: {
      title: 'Timeline View',
      rows: [
        timelineRow('Load', { 1: 'F', 2: 'D', 3: 'E', 4: 'W' }),
        timelineRow('Add', { 2: 'F', 3: 'D', 4: 'E', 5: 'W' }),
        timelineRow('Store', { 3: 'F', 4: 'D', 5: 'E', 6: 'W' }),
        timelineRow('Compare', { 4: 'F', 5: 'D', 6: 'E', 7: 'W' }),
        timelineRow('Branch', { 5: 'F', 6: 'D', 7: 'E', 8: 'W' }),
      ],
    },
  },
  fetchStall: {
    title: 'Pipeline Animation: Fetch Stall',
    subtitle:
      'An I-cache miss stops Fetch from supplying new instruction bytes. Older instructions drain out, then the whole pipeline goes idle until fetch recovers.',
    badge: 'Fetch Stall',
    caption:
      'This is a frontend failure. The damage starts in Fetch, then propagates backward as the machine runs out of useful bytes to decode and execute.',
    textSummary:
      'Text summary: in the fetch-stall case, the instruction stream misses in the instruction cache. Fetch stops supplying new bytes, older instructions drain out, and the pipeline partially empties until the missing instruction bytes arrive.',
    programTitle: 'Same example program, now with a fetch-side failure',
    program: sharedProgram,
    watchTitle: 'Why the stall happens',
    watchItems: [
      'The instructions are the same as in the normal animation.',
      'The stall is not caused by a slow ALU instruction.',
      'Fetch cannot read the next instruction bytes because the I-cache missed, so no new instruction can enter until fetch recovers.',
    ],
    frames: [
      frame('Cycle 1', 'Normal fetch begins.', 'Load enters Fetch.', [
        cell('FETCH', 'Load', 'active', 'frontend active'),
        empty('DECODE'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 2', 'The pipeline is filling normally.', 'Load moved to Decode. Add entered Fetch.', [
        cell('FETCH', 'Add', 'active', 'next bytes fetched'),
        cell('DECODE', 'Load', 'active', 'decode active'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 3', 'Useful work is flowing.', 'Load reached Execute. Add moved to Decode. Store entered Fetch.', [
        cell('FETCH', 'Store', 'active', 'stream continues'),
        cell('DECODE', 'Add', 'active', 'decode continues'),
        cell('EXECUTE', 'Load', 'active', 'execute active'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 4', 'Fetch misses in the I-cache.', 'Fetch cannot get the next instruction bytes. Older work still advances.', [
        cell('FETCH', '⚠️ MISS', 'miss', 'waiting for instruction bytes'),
        cell('DECODE', 'Store', 'active', 'last good decode'),
        cell('EXECUTE', 'Add', 'active', 'older work continues'),
        cell('WRITEBACK', 'Load', 'active', 'older work retires'),
      ]),
      frame('Cycle 5', 'The miss stalls the frontend.', 'Fetch and Decode are now frozen. Only older instructions keep draining.', [
        cell('FETCH', '⏸ STALL', 'stall', 'frontend blocked'),
        cell('DECODE', '⏸ STALL', 'stall', 'nothing new to decode'),
        cell('EXECUTE', 'Store', 'active', 'older work still in flight'),
        cell('WRITEBACK', 'Add', 'active', 'older work retires'),
      ]),
      frame('Cycle 6', 'The pipeline is draining.', 'No new work enters. The machine is running out of useful instructions.', [
        cell('FETCH', '⏸ STALL', 'stall', 'still waiting'),
        cell('DECODE', '⏸ STALL', 'stall', 'still waiting'),
        cell('EXECUTE', '⏸ STALL', 'stall', 'no decoded work left'),
        cell('WRITEBACK', 'Store', 'active', 'last useful result'),
      ]),
      frame('Cycle 7', 'Everything useful has drained out.', 'The whole pipeline is now idle behind the miss.', [
        cell('FETCH', '⏸ STALL', 'stall', 'still waiting'),
        cell('DECODE', '⏸ STALL', 'stall', 'bubble'),
        cell('EXECUTE', '⏸ STALL', 'stall', 'bubble'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 8', 'Instruction bytes finally return.', 'Fetch recovers and can finally restart the instruction stream.', [
        cell('FETCH', '✅ READY', 'ready', 'bytes arrived'),
        cell('DECODE', '⏸ STALL', 'stall', 'frontend restarting'),
        cell('EXECUTE', '⏸ STALL', 'stall', 'frontend restarting'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 9', 'Fetch resumes with new instructions.', 'Compare entered Fetch. Decode begins to refill.', [
        cell('FETCH', 'Compare', 'active', 'stream resumes'),
        cell('DECODE', '✅ READY', 'ready', 'decode restarts'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 10', 'The pipeline begins refilling.', 'Branch entered Fetch. Compare moved to Decode. Useful work is flowing again.', [
        cell('FETCH', 'Branch', 'active', 'normal fetch again'),
        cell('DECODE', 'Compare', 'active', 'refill'),
        cell('EXECUTE', '✅ READY', 'ready', 'recovered'),
        empty('WRITEBACK'),
      ]),
    ],
    timeline: {
      title: 'Timeline View',
      rows: [
        timelineRow('Load', { 1: 'F', 2: 'D', 3: 'E', 4: 'W' }),
        timelineRow('Add', { 2: 'F', 3: 'D', 4: 'E', 5: 'W' }),
        timelineRow('Store', { 3: 'F', 4: 'D', 5: 'E', 6: 'W' }),
        timelineRow('Compare', { 4: 'MISS', 5: 'STALL', 6: 'STALL', 7: 'STALL', 8: 'READY', 9: 'F', 10: 'D' }),
        timelineRow('Branch', { 10: 'F' }),
      ],
    },
  },
  executeStall: {
    title: 'Pipeline Animation: Execute Stall',
    subtitle:
      'A data-cache miss is discovered in Execute. The stalled load cannot complete, so younger instructions back up behind it until data returns.',
    badge: 'Execute Stall',
    caption:
      'This is a backend failure. The miss happens in Execute, but the visible consequence is backpressure through Decode and Fetch until the load finishes.',
    textSummary:
      'Text summary: in the execute-stall case, a load reaches Execute and misses in the data cache. Younger instructions cannot get past that blocked load, so they back up behind it until the data returns and forward progress resumes.',
    programTitle: 'Same example program, now with an execute-side failure',
    program: sharedProgram,
    watchTitle: 'Why the stall happens',
    watchItems: [
      'The instructions are the same as in the normal animation.',
      'The blocking instruction is the Load instruction when it reaches Execute.',
      'That load is waiting for data from memory, so Add, Store, Compare, and Branch all pile up behind it.',
    ],
    frames: [
      frame('Cycle 1', 'Normal flow begins.', 'Load enters Fetch.', [
        cell('FETCH', 'Load', 'active', 'first instruction enters'),
        empty('DECODE'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 2', 'Pipeline fill continues.', 'Load moved to Decode. Add entered Fetch.', [
        cell('FETCH', 'Add', 'active', 'next fetch'),
        cell('DECODE', 'Load', 'active', 'decode active'),
        empty('EXECUTE'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 3', 'The older load reaches Execute.', 'Load reached Execute. Add moved to Decode. Store entered Fetch.', [
        cell('FETCH', 'Store', 'active', 'younger work entering'),
        cell('DECODE', 'Add', 'active', 'decode active'),
        cell('EXECUTE', 'Load', 'active', 'load executes'),
        empty('WRITEBACK'),
      ]),
      frame('Cycle 4', 'The load misses in the data cache.', 'The miss is discovered in Execute. Younger instructions are still behind it.', [
        cell('FETCH', 'Compare', 'active', 'younger work keeps entering'),
        cell('DECODE', 'Store', 'active', 'decode still flowing'),
        cell('EXECUTE', '⚠️ LOAD MISS', 'miss', 'waiting on data'),
        cell('WRITEBACK', 'Load', 'active', 'older result retires'),
      ]),
      frame('Cycle 5', 'Execute backpressure appears.', 'Execute is now blocked. Younger work cannot pass through the miss.', [
        cell('FETCH', 'Branch', 'active', 'fetch still ahead'),
        cell('DECODE', 'Compare', 'active', 'decode still ahead'),
        cell('EXECUTE', '⏸ STALL', 'stall', 'load not complete'),
        cell('WRITEBACK', 'Add', 'active', 'older work retires'),
      ]),
      frame('Cycle 6', 'Younger work is stacked behind Execute.', 'Branch has now entered Fetch, but Execute remains the bottleneck.', [
        cell('FETCH', 'Branch', 'active', 'fetch queue growing'),
        cell('DECODE', 'Compare', 'active', 'decode queue growing'),
        cell('EXECUTE', '⏸ STALL', 'stall', 'still waiting'),
        cell('WRITEBACK', 'Store', 'active', 'older work retires'),
      ]),
      frame('Cycle 7', 'The miss still blocks progress.', 'Branch is now decoded, but it still cannot get past the blocked load.', [
        empty('FETCH'),
        cell('DECODE', 'Branch', 'active', 'front is backed up'),
        cell('EXECUTE', '⏸ STALL', 'stall', 'still waiting'),
        cell('WRITEBACK', 'Compare', 'active', 'older work retires'),
      ]),
      frame('Cycle 8', 'Data finally returns.', 'The blocked load completes and Compare can finally move. Branch is next behind it.', [
        empty('FETCH'),
        cell('DECODE', 'Branch', 'active', 'decoded and waiting'),
        cell('EXECUTE', '✅ DATA READY', 'ready', 'load completes'),
        cell('WRITEBACK', 'Compare', 'active', 'retirement continues'),
      ]),
      frame('Cycle 9', 'The pipeline starts flowing again.', 'Branch finally advances to Execute after waiting behind the stalled load.', [
        empty('FETCH'),
        empty('DECODE'),
        cell('EXECUTE', 'Branch', 'active', 'younger work advances'),
        cell('WRITEBACK', 'Compare', 'active', 'committed'),
      ]),
      frame('Cycle 10', 'Recovered steady flow.', 'The same five-instruction program has now cleared the stall and is ready to repeat.', [
        empty('FETCH'),
        empty('DECODE'),
        empty('EXECUTE'),
        cell('WRITEBACK', 'Branch', 'active', 'normal flow restored'),
      ]),
    ],
    timeline: {
      title: 'Timeline View',
      rows: [
        timelineRow('Load', { 1: 'F', 2: 'D', 3: 'MISS', 4: 'STALL', 5: 'STALL', 6: 'STALL', 7: 'READY', 8: 'W' }),
        timelineRow('Add', { 2: 'F', 3: 'D' }),
        timelineRow('Store', { 3: 'F', 4: 'D', 5: 'W' }),
        timelineRow('Compare', { 4: 'F', 5: 'D', 6: 'W', 8: 'W' }),
        timelineRow('Branch', { 5: 'F', 6: 'D', 9: 'E', 10: 'W' }),
      ],
    },
  },
};

function frame(label, note, summary, stages) {
  return { label, note, summary, stages };
}

function cell(stage, value, state, detail) {
  return { stage, value, state, detail };
}

function empty(stage) {
  return { stage, value: '—', state: 'empty', detail: 'idle' };
}

function timelineRow(name, slots) {
  return { name, slots };
}

function timelineStatus(slotValue, cycle, currentCycle) {
  if (!slotValue) {
    return cycle < currentCycle ? 'past' : 'future';
  }
  if (cycle > currentCycle) {
    return 'future';
  }
  if (cycle < currentCycle) {
    return slotValue === 'MISS' ? 'miss' : slotValue === 'STALL' ? 'stall' : slotValue === 'READY' ? 'ready' : 'past';
  }
  if (slotValue === 'MISS') return 'miss';
  if (slotValue === 'STALL') return 'stall';
  if (slotValue === 'READY') return 'ready';
  return 'current';
}

function cellClass(status) {
  switch (status) {
    case 'active':
      return styles.stateActive;
    case 'miss':
      return styles.stateMiss;
    case 'stall':
      return styles.stateStall;
    case 'ready':
      return styles.stateReady;
    default:
      return styles.stateEmpty;
  }
}

function instructionStatusMap(program, frame) {
  const map = new Map(program.map((instruction) => [instruction.name, { label: 'Waiting', tone: 'future' }]));

  frame.stages.forEach((stage) => {
    const normalized = stage.value.replace('⚠️ ', '').replace('✅ ', '').replace('⏸ ', '');
    const existing = map.get(normalized);
    if (!existing) return;

    if (stage.state === 'miss') {
      map.set(normalized, { label: `${stage.stage} miss`, tone: 'miss' });
      return;
    }
    if (stage.state === 'stall') {
      map.set(normalized, { label: `${stage.stage} stalled`, tone: 'stall' });
      return;
    }
    if (stage.state === 'ready') {
      map.set(normalized, { label: `${stage.stage} ready`, tone: 'ready' });
      return;
    }
    if (stage.state === 'active') {
      map.set(normalized, { label: stage.stage, tone: 'current' });
    }
  });

  return map;
}

function progressForStatus(label) {
  if (label.startsWith('FETCH')) return 25;
  if (label.startsWith('DECODE')) return 50;
  if (label.startsWith('EXECUTE')) return 75;
  if (label.startsWith('WRITEBACK')) return 100;
  if (label.includes('miss')) return 75;
  if (label.includes('stalled')) return 75;
  if (label.includes('ready')) return 85;
  return 0;
}

function stageToneClass(state) {
  switch (state) {
    case 'active':
      return styles.stageToneActive;
    case 'miss':
      return styles.stageToneMiss;
    case 'stall':
      return styles.stageToneStall;
    case 'ready':
      return styles.stageToneReady;
    default:
      return styles.stageToneEmpty;
  }
}

export default function PipelineAnimation({ scenario = 'normal' }) {
  const data = scenarios[scenario] ?? scenarios.normal;
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentFrame = data.frames[currentFrameIndex];
  const totalFrames = data.frames.length;

  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = window.setInterval(() => {
      setCurrentFrameIndex((index) => {
        if (index >= totalFrames - 1) {
          window.clearInterval(timer);
          setIsPlaying(false);
          return index;
        }
        return index + 1;
      });
    }, 1300);
    return () => window.clearInterval(timer);
  }, [isPlaying, totalFrames]);

  const cycleNumber = currentFrameIndex + 1;
  const timelineCycles = useMemo(() => Array.from({ length: 10 }, (_, index) => index + 1), []);
  const statuses = instructionStatusMap(data.program, currentFrame);
  const progressPercent = Math.round((cycleNumber / totalFrames) * 100);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <p className={styles.viewHint}>
            Click through the animation here, but for the clearest view open it on a laptop or switch your phone to desktop-sized view.
          </p>
        </div>
        <div className={styles.badge}>{data.badge}</div>
      </div>

      <div className={styles.summaryBox}>
        <div className={styles.summaryLabel}>This cycle</div>
        <div className={styles.summaryText}>{currentFrame.summary}</div>
      </div>

      <div className={styles.accessibilityBox}>
        <div className={styles.summaryLabel}>Text summary of this animation</div>
        <div className={styles.accessibilityText}>{data.textSummary}</div>
      </div>

      <div className={styles.pipelineLayout}>
        <div className={styles.pipelineColumn}>
          <div className={styles.pipelineTitle}>Pipeline stages right now</div>
          <div className={styles.stageRail}>
            {stageOrder.map((stageName, index) => {
              const stage = currentFrame.stages.find((item) => item.stage === stageName);
              return (
                <React.Fragment key={`${currentFrame.label}-${stageName}`}>
                  <div className={clsx(styles.stageCard, stageToneClass(stage.state))}>
                    <div className={styles.stageCardTop}>
                      <div>
                        <div className={styles.stageLabel}>{stageName}</div>
                        <div className={styles.stageHint}>{stageDescriptions[stageName]}</div>
                      </div>
                      <span className={clsx(styles.stageDot, stageToneClass(stage.state))} />
                    </div>
                    <div className={styles.stageInstruction}>{stage.value}</div>
                    <div className={styles.stageDetail}>{stage.detail}</div>
                  </div>
                  {index < stageOrder.length - 1 ? (
                    <div className={styles.stageArrow} aria-hidden="true">
                      <span className={styles.arrowDesktop}>→</span>
                      <span className={styles.arrowMobile}>↓</span>
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className={styles.trackerColumn}>
          <div className={styles.stickyControls}>
            <div className={styles.controls}>
              <button className={styles.button} onClick={() => setIsPlaying(true)} disabled={isPlaying || currentFrameIndex === totalFrames - 1}>
                ▶ Play
              </button>
              <button className={clsx(styles.button, styles.buttonSecondary)} onClick={() => setIsPlaying(false)} disabled={!isPlaying}>
                ⏸ Pause
              </button>
              <button
                className={clsx(styles.button, styles.buttonSecondary)}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentFrameIndex((index) => Math.min(index + 1, totalFrames - 1));
                }}
                disabled={currentFrameIndex === totalFrames - 1}
              >
                ⏩ Step
              </button>
              <button
                className={clsx(styles.button, styles.buttonSecondary)}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentFrameIndex(0);
                }}
                disabled={currentFrameIndex === 0}
              >
                ⟳ Reset
              </button>
            </div>

            <div className={styles.cyclePanel}>
              <div className={styles.cycleHeader}>
                <span>Cycle</span>
                <span>
                  {cycleNumber} / {totalFrames}
                </span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
              </div>
              <div className={styles.progressText}>{progressPercent}% complete</div>
            </div>
          </div>

          <div className={styles.tracker}>
            <div className={styles.trackerTitle}>Current instruction positions</div>
            {data.program.map((instruction) => {
              const status = statuses.get(instruction.name);
              const progress = progressForStatus(status.label);
              return (
                <div key={`tracker-${instruction.name}`} className={styles.trackerRow}>
                  <div className={styles.trackerMeta}>
                    <div className={styles.trackerName}>{instruction.name}</div>
                    <div className={styles.trackerAsm}>{instruction.asm}</div>
                  </div>
                  <div className={styles.trackerMeter}>
                    <div className={styles.trackerBar}>
                      <div
                        className={clsx(
                          styles.trackerBarFill,
                          status.tone === 'current' && styles.trackerCurrent,
                          status.tone === 'miss' && styles.trackerMiss,
                          status.tone === 'stall' && styles.trackerStall,
                          status.tone === 'ready' && styles.trackerReady,
                          status.tone === 'future' && styles.trackerFuture
                        )}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div
                      className={clsx(
                        styles.trackerBadge,
                        status.tone === 'current' && styles.trackerCurrent,
                        status.tone === 'miss' && styles.trackerMiss,
                        status.tone === 'stall' && styles.trackerStall,
                        status.tone === 'ready' && styles.trackerReady,
                        status.tone === 'future' && styles.trackerFuture
                      )}
                    >
                      {status.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className={styles.frameNote}>{currentFrame.note}</p>

      <details className={styles.mobileDetails}>
        <summary className={styles.mobileSummary}>timeline</summary>
        <div className={styles.mobileDetailsContent}>
          <div className={styles.readBox}>
            <div className={styles.readTitle}>How to read this</div>
            <div className={styles.readText}>
              Follow the same five instructions every time: <strong>Load</strong>, <strong>Add</strong>, <strong>Store</strong>, <strong>Compare</strong>, <strong>Branch</strong>.
              Then ask one question: <strong>where is each instruction right now?</strong>
            </div>
          </div>
          <div className={styles.preflight}>
            <div className={styles.preflightBlock}>
              <div className={styles.preflightTitle}>{data.programTitle}</div>
              <div className={styles.instructionList}>
                {data.program.map((instruction, index) => (
                  <div key={`details-${instruction.name}`} className={styles.instructionItem}>
                    <div className={styles.instructionIndex}>{index + 1}</div>
                    <div>
                      <div className={styles.instructionName}>{instruction.name}</div>
                      <div className={styles.instructionAsm}>{instruction.asm}</div>
                      <div className={styles.instructionRole}>{instruction.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.preflightBlock}>
              <div className={styles.preflightTitle}>{data.watchTitle}</div>
              <ul className={styles.watchList}>
                {data.watchItems.map((item) => (
                  <li key={`watch-${item}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.legend}>
            {legend.map((item) => (
              <span key={item.label} className={styles.legendItem}>
                <span className={clsx(styles.legendSwatch, item.className)} />
                {item.label}
              </span>
            ))}
          </div>

          {data.timeline ? (
            <div className={styles.timeline}>
              <p className={styles.timelineTitle}>{data.timeline.title}</p>
              <div className={styles.timelineControls}>
                <button className={styles.button} onClick={() => setIsPlaying(true)} disabled={isPlaying || currentFrameIndex === totalFrames - 1}>
                  ▶ Play
                </button>
                <button className={clsx(styles.button, styles.buttonSecondary)} onClick={() => setIsPlaying(false)} disabled={!isPlaying}>
                  ⏸ Pause
                </button>
                <button
                  className={clsx(styles.button, styles.buttonSecondary)}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentFrameIndex((index) => Math.min(index + 1, totalFrames - 1));
                  }}
                  disabled={currentFrameIndex === totalFrames - 1}
                >
                  ⏩ Step
                </button>
                <button
                  className={clsx(styles.button, styles.buttonSecondary)}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentFrameIndex(0);
                  }}
                  disabled={currentFrameIndex === 0}
                >
                  ⟳ Reset
                </button>
              </div>
              <div className={styles.timelineHeader}>
                <div />
                {timelineCycles.map((cycle) => (
                  <div key={cycle}>{cycle}</div>
                ))}
              </div>
              {data.timeline.rows.map((row) => (
                <div key={row.name} className={styles.timelineRow}>
                  <div className={styles.timelineName}>{row.name}</div>
                  {timelineCycles.map((cycle) => {
                    const slotValue = row.slots[cycle];
                    const status = timelineStatus(slotValue, cycle, cycleNumber);
                    return (
                      <motion.div
                        key={`${row.name}-${cycle}`}
                        className={clsx(
                          styles.timelineCell,
                          status === 'future' && styles.timelineFuture,
                          status === 'past' && styles.timelinePast,
                          status === 'current' && styles.timelineCurrent,
                          status === 'miss' && styles.timelineMiss,
                          status === 'stall' && styles.timelineStall,
                          status === 'ready' && styles.timelineReady
                        )}
                        animate={{ scale: cycle === cycleNumber ? 1.04 : 1 }}
                        transition={{ duration: 0.18 }}
                      >
                        {slotValue ?? '·'}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </details>

      <p className={styles.caption}>{data.caption}</p>
    </div>
  );
}
