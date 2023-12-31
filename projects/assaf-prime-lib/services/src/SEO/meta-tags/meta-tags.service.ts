import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaTagsService {
  constructor(private __metaManager: Meta) {}

  /**
   * Adds new meta tag to head
   * @param tag new tag to be added
   */
  addMetaTag(tag: MetaDefinition): void {
    this.__metaManager.addTag(tag);
  }
  /**
   * Adds an array of meta tags to document head
   * @param tags array of tags to be added
   */
  addMetaTags(tags: MetaDefinition[]): void {
    this.__metaManager.addTags(tags);
  }
  /**
   * Updates an existing meta tag
   * @param tag tag to be updated
   */
  updateMetaTag(tag: MetaDefinition): void {
    this.__metaManager.updateTag(tag);
  }
  /**
   * Updates a set of existing meta tags
   * @param tags array of tags to be updated
   */
  updateMetaTags(tags: MetaDefinition[]): void {
    tags.forEach((tag) => {
      this.__metaManager.updateTag(tag);
    });
  }
  /**
   * Removes meta tag from document head
   * @param tag selector for removing tag
   */
  removeMetaTag(tag: string): void {
    this.__metaManager.removeTag(tag);
  }
}
