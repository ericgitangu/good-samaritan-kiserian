// types/event.ts
export interface Event {
    id: string
    title: string
    description: string
    imageUrl: string
    startDate: Date
    endDate: Date
    location?: string
    // ... other properties you need for events
}