export class segmentMetaDataList {
    constructor(
        public successFlag: boolean,
        public segmentId: number,
        public segmentName: string,
        public created: string,
        public updated: string,
        public count: number, ) { }
}




export class segmentStaticInputData {
	public  key:String;
    public  titleMap:segmentStaticMapData[];
    
    constructor(
        key: String,
        titleMap: segmentStaticMapData[],
    )
    
    {
    this.key = key;
    this.titleMap = titleMap;
    }
}

export class segmentStaticMapData {

	public value:String;
	public name:String;

    constructor(
        value: String,
        name: String,
    )
    
    {
    this.value = value;
    this.name = name;
    }
    
}