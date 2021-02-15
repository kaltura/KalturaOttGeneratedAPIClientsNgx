
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAsset, KalturaAssetArgs } from './KalturaAsset';

export interface KalturaEpgArgs  extends KalturaAssetArgs {
    
}


export class KalturaEpg extends KalturaAsset {

    

    constructor(data? : KalturaEpgArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEpg' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEpg'] = KalturaEpg;