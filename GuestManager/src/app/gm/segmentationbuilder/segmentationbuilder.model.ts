export class segmentMetaDataList {
    constructor(
        public successFlag: boolean,
        public segmentId: number,
        public segmentName: string,
        public created: string,
        public updated: string,
        public count: number, ) { }
}
