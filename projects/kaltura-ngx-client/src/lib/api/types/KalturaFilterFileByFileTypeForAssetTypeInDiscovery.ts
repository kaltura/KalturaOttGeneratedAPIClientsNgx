
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilterFileByFileTypeForAssetType, KalturaFilterFileByFileTypeForAssetTypeArgs } from './KalturaFilterFileByFileTypeForAssetType';

export interface KalturaFilterFileByFileTypeForAssetTypeInDiscoveryArgs  extends KalturaFilterFileByFileTypeForAssetTypeArgs {
    
}


export class KalturaFilterFileByFileTypeForAssetTypeInDiscovery extends KalturaFilterFileByFileTypeForAssetType {

    

    constructor(data? : KalturaFilterFileByFileTypeForAssetTypeInDiscoveryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFilterFileByFileTypeForAssetTypeInDiscovery' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFilterFileByFileTypeForAssetTypeInDiscovery'] = KalturaFilterFileByFileTypeForAssetTypeInDiscovery;