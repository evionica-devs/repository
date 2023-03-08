import type { ForeignEntity, Relationship } from "@/types/index"
import type { Entity } from "@/interfaces"
import { Relationships } from "@/enums"

export class RelationshipManager<TRelationships extends readonly [...Relationship<any, any>[]]> {
  private readonly _relationships: TRelationships

  public constructor(relations: TRelationships) {
    this._relationships = relations
  }

  get(id: string | symbol): ForeignEntity {
    return "find relations id and return entity?"
  }
}
