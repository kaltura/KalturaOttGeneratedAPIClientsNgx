
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaSegmentationTypeFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaSegmentationTypeFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaSegmentationTypeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentationTypeFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegmentationTypeFilter'] = KalturaSegmentationTypeFilter;