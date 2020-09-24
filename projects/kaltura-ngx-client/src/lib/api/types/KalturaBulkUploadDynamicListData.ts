
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData, KalturaBulkUploadObjectDataArgs } from './KalturaBulkUploadObjectData';

export interface KalturaBulkUploadDynamicListDataArgs  extends KalturaBulkUploadObjectDataArgs {
    dynamicListId? : number;
}


export class KalturaBulkUploadDynamicListData extends KalturaBulkUploadObjectData {

    dynamicListId : number;

    constructor(data? : KalturaBulkUploadDynamicListDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadDynamicListData' },
				dynamicListId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadDynamicListData'] = KalturaBulkUploadDynamicListData;