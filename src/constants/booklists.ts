export interface BookList {
  id: string
  title: string
  description: string
  books: { id: string; type: string }[]
}

export const BOOK_LISTS: BookList[] = [
  {
    id: 'world-classics',
    title: '世界文学经典',
    description: '不可错过的世界文学大师名作',
    books: [
      { id: 'd9cd1b80-20ac-44f1-abb0-5f84cdb8a50b', type: '文学' },
      { id: 'b5f1b415-a2e8-45a2-b525-206e2c3e5fbd', type: '文学' },
      { id: 'cf25812c-63ae-4ef7-8d98-70de1e0f3a9a', type: '文学' },
      { id: '2bb1279c-2958-4f30-bdbf-48a09b89d8f9', type: '文学' },
      { id: 'f6744da0-ab7b-4ad5-bf48-5e280365bb4f', type: '文学' },
    ],
  },
  {
    id: 'history-stories',
    title: '读历史知兴替',
    description: '从历史长河中读懂人类文明',
    books: [
      { id: 'd1ebe002-9850-4308-8cd6-96c8e5ed23dd', type: '历史' },
      { id: 'a86a965d-cd68-420d-bc08-fd55dc4cfa23', type: '历史' },
      { id: 'ad81bbb7-386e-4bc2-8b8e-fe4502e75fa4', type: '历史' },
      { id: '68dda168-d40d-4b2a-a510-afdfecdf02c2', type: '历史' },
      { id: '5f0f3a5c-dfcf-440b-8e08-3a1c68a6f63c', type: '历史' },
    ],
  },
  {
    id: 'popular-science',
    title: '科普新视野',
    description: '探索宇宙与科学的奥秘',
    books: [
      { id: '0a566e0d-76f7-4bd6-ac2a-1b6f5c44f3af', type: '科技' },
      { id: '2e08255c-827d-4a61-8c62-51d585d05ba1', type: '科技' },
      { id: '03b503c5-64b1-481b-8254-2599c925bdd6', type: '科技' },
      { id: 'fd5ff9f5-a793-488b-a43b-5bd532737c6c', type: '科技' },
      { id: '0dfd8041-7c40-45dc-9216-25dee021a823', type: '科技' },
    ],
  },
  {
    id: 'mind-growth',
    title: '心灵成长书单',
    description: '读懂自己，拥抱内心',
    books: [
      { id: '277e468f-9905-493e-ae02-963e61823451', type: '心理' },
      { id: '38d91789-0259-4980-b756-6fa643bd1635', type: '心理' },
      { id: '5cb5ea6f-f05b-4c74-bdf6-dfc99129166b', type: '心理' },
      { id: 'b03249bc-436e-45b4-8eca-d4c0b592a2cf', type: '心理' },
      { id: 'd6264132-983d-4077-879d-6035c5d44257', type: '心理' },
    ],
  },
  {
    id: 'business-insights',
    title: '商业与经济洞察',
    description: '理解经济脉络，把握商业趋势',
    books: [
      { id: 'c36821f8-7247-403a-b3c5-4886ab6a68e0', type: '经济' },
      { id: '0339d3b1-95a0-47e5-b5ca-bddd3337a0aa', type: '经济' },
      { id: '864f218b-e299-4f1c-9dc3-78c11f620b20', type: '经济' },
      { id: '5012cc3d-660a-4eb1-9d95-d1416f1a2ffe', type: '经济' },
      { id: 'c1c8ebe6-cb49-43fb-9a4d-69ed710dc9b7', type: '经济' },
    ],
  },
]
