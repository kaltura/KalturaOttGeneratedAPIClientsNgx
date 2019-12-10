
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadMediaAssetResult, KalturaBulkUploadMediaAssetResultArgs } from './KalturaBulkUploadMediaAssetResult';

export interface KalturaBulkUploadLiveAssetResultArgs  extends KalturaBulkUploadMediaAssetResultArgs {
    
}


export class KalturaBulkUploadLiveAssetResult extends KalturaBulkUploadMediaAssetResult {

    

    constructor(data? : KalturaBulkUploadLiveAssetResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadLiveAssetResult' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBulkUploadLiveAssetResult'] = KalturaBulkUploadLiveAssetResult;