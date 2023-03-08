import type { RelationshipManager } from "@/RelationshipManager"
import type { Relationship } from "@/types"

interface Entity<T extends Record<string, any>, TRelationships extends readonly [...Relationship<any, any>[]] = []> {
  readonly localKey: string
  readonly remoteKey: string

  update(): Entity<T>
  toNativeObject(): T
  toJSON(): string
  relationships(): RelationshipManager<TRelationships>
  // TODO: Find proper typings
  // relationship(id: string | symbol)
}

export type { Entity }
