import { BOOK_ITEMS, BOOK_TOPICS } from './collections';

export function getBookTopic(topicId) {
  return BOOK_TOPICS.find((topic) => topic.id === topicId) || null;
}

export function getBooksByTopic(topicId) {
  return BOOK_ITEMS.filter((item) => item.topic === topicId);
}

export function groupBooksByCategory(items) {
  return items.reduce((groups, item) => {
    const key = item.category || 'Books';
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

export function getBooksOverviewStats() {
  return BOOK_TOPICS.reduce(
    (summary, topic) => {
      summary.topicCount += 1;
      summary.totalBookCount += getBooksByTopic(topic.id).length;
      return summary;
    },
    { topicCount: 0, totalBookCount: 0 },
  );
}
