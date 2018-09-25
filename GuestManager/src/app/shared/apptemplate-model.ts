export interface CompareData {
    age: number;
    height: number;
    income: number;
  }
  
 export class AppTemplate {
    constructor(
      public configId: number,
       public tenantId: number,
       public configGroup: string,
       public configName: string,
       public configValue: string,
       public description: string,
       public created: string,
       public lastUpdated: string,
       public configDisplayLabel: string,
       public configDisplaySeq: number) {}
  }
  

  