
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadAssetData, KalturaBulkUploadAssetDataArgs } from './KalturaBulkUploadAssetData';

export interface KalturaBulkUploadMediaAssetDataArgs  extends KalturaBulkUploadAssetDataArgs {
    
}


export class KalturaBulkUploadMediaAssetData extends KalturaBulkUploadAssetData {

    

    constructor(data? : KalturaBulkUploadMediaAssetDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadMediaAssetData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadMediaAssetData'] = KalturaBulkUploadMediaAssetData;