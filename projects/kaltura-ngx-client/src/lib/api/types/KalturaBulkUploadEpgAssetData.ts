
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadAssetData, KalturaBulkUploadAssetDataArgs } from './KalturaBulkUploadAssetData';

export interface KalturaBulkUploadEpgAssetDataArgs  extends KalturaBulkUploadAssetDataArgs {
    
}


export class KalturaBulkUploadEpgAssetData extends KalturaBulkUploadAssetData {

    

    constructor(data? : KalturaBulkUploadEpgAssetDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadEpgAssetData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadEpgAssetData'] = KalturaBulkUploadEpgAssetData;