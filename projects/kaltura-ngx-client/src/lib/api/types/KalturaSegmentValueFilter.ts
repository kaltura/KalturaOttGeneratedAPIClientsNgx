
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSegmentationTypeFilter, KalturaBaseSegmentationTypeFilterArgs } from './KalturaBaseSegmentationTypeFilter';

export interface KalturaSegmentValueFilterArgs  extends KalturaBaseSegmentationTypeFilterArgs {
    idIn? : string;
}


export class KalturaSegmentValueFilter extends KalturaBaseSegmentationTypeFilter {

    idIn : string;

    constructor(data? : KalturaSegmentValueFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentValueFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegmentValueFilter'] = KalturaSegmentValueFilter;