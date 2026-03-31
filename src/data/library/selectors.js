import { LIBRARY_PAPERS, LIBRARY_TOPICS } from './collections';

export function getLibraryTopic(topicId) {
  return LIBRARY_TOPICS.find((topic) => topic.id === topicId) || null;
}

export function getLibraryPaper(paperId) {
  return LIBRARY_PAPERS.find((paper) => paper.id === paperId) || null;
}

export function getLibraryPapersByTopic(topicId) {
  return LIBRARY_PAPERS.filter((paper) => paper.topic === topicId);
}

export function groupLibraryPapersByCategory(papers) {
  return papers.reduce((groups, paper) => {
    const key = paper.category || 'Library Shelf';
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(paper);
    return groups;
  }, {});
}

export function getLibraryTopicStats(topicId) {
  const papers = getLibraryPapersByTopic(topicId);
  return {
    itemCount: papers.length,
    shelfCount: Object.keys(groupLibraryPapersByCategory(papers)).length,
  };
}

export function getLibraryOverviewStats() {
  return LIBRARY_TOPICS.reduce(
    (summary, topic) => {
      summary.topicCount += 1;
      summary.totalPaperCount += getLibraryPapersByTopic(topic.id).length;
      return summary;
    },
    { topicCount: 0, totalPaperCount: 0 },
  );
}
