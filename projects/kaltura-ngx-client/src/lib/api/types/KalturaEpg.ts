
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaProgramAsset, KalturaProgramAssetArgs } from './KalturaProgramAsset';

export interface KalturaEpgArgs  extends KalturaProgramAssetArgs {
    
}


export class KalturaEpg extends KalturaProgramAsset {

    

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