
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRegionFilterArgs  extends KalturaFilterArgs {
    externalIdIn? : string;
}


export class KalturaRegionFilter extends KalturaFilter {

    externalIdIn : string;

    constructor(data? : KalturaRegionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionFilter' },
				externalIdIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRegionFilter'] = KalturaRegionFilter;