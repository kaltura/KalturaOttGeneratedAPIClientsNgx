
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseAssetStructFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBaseAssetStructFilter extends KalturaFilter {

    

    constructor(data? : KalturaBaseAssetStructFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseAssetStructFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseAssetStructFilter'] = KalturaBaseAssetStructFilter;