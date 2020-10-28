
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDynamicList, KalturaDynamicListArgs } from './KalturaDynamicList';

export interface KalturaUdidDynamicListArgs  extends KalturaDynamicListArgs {
    
}


export class KalturaUdidDynamicList extends KalturaDynamicList {

    

    constructor(data? : KalturaUdidDynamicListArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUdidDynamicList' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUdidDynamicList'] = KalturaUdidDynamicList;