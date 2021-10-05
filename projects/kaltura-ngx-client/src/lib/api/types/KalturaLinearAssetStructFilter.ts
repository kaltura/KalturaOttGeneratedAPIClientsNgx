
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseAssetStructFilter, KalturaBaseAssetStructFilterArgs } from './KalturaBaseAssetStructFilter';

export interface KalturaLinearAssetStructFilterArgs  extends KalturaBaseAssetStructFilterArgs {
    
}


export class KalturaLinearAssetStructFilter extends KalturaBaseAssetStructFilter {

    

    constructor(data? : KalturaLinearAssetStructFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLinearAssetStructFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLinearAssetStructFilter'] = KalturaLinearAssetStructFilter;