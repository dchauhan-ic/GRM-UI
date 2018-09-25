
export interface searchQueryObject {
  searchKey: string;
  limit: number;
  offset: number;
}
export class countMap{
  matchedMember:number;
  totalMember:number;
}

export class memberSearchList {
    constructor(
      public memberId: number,
       public firstName: string,
       public lastName: string,
       public email: string,
       public mobilePhone: string
      
      ) {}
  }

  export class memberProfiler {
    constructor(
      public memberSearchList: memberSearchList[],
      public countMap: countMap[],
      
      ) {}
  }

  