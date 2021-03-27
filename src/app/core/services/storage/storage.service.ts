import { Injectable } from '@angular/core';
import { StorageRecord } from './storage-record.interface';

export const STORAGE_KEY = 'globle_storage_key';

@Injectable({ providedIn: 'root' })
export class StorageService {
  /**
   * Adds a new value in the localstorage store
   * @param key Name of key
   * @param value Value to be stored
   */
  public set<T>(key: string, value: T): void {
    const store = this.getStore();
    store[key] = this.convertToString(value);
    this.setStore(store);
  }

  /**
   * Retrieve a value from the localstorage store
   * @param key Name of storage key
   */
  public get<X, Y>(key: string): X | Y | undefined {
    const store = this.getStore();
    return store[key] ? this.convertToJson(store[key]) : undefined;
  }

  /**
   * Determine if key is present in storage or not
   * @param key Name of storage key
   */
  public has(key: string): boolean {
    const store = this.getStore();
    return !!store[key];
  }

  /**
   * Read the store from localstore store
   */
  private getStore(): any {
    const localStore: string = localStorage.getItem(STORAGE_KEY);
    return localStore ? JSON.parse(localStore) : {};
  }

  /**
   * Write the store to storage
   * @param store Store to store
   */
  private setStore(store: any): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  /**
   * Convert the value to string so that it can be store in the
   * local storage
   * @param value Value to be stringified
   */
  private convertToString<T>(value: T): StorageRecord {
    return JSON.stringify({ value });
  }

  /**
   * Converts string to json
   * @param record Record to decode
   */
  private convertToJson<T>(record: StorageRecord): T {
    return JSON.parse(record).value;
  }
}
