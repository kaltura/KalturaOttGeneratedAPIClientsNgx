
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUserSegmentFilterArgs  extends KalturaFilterArgs {
    userIdEqual? : string;
}


export class KalturaUserSegmentFilter extends KalturaFilter {

    userIdEqual : string;

    constructor(data? : KalturaUserSegmentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSegmentFilter' },
				userIdEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserSegmentFilter'] = KalturaUserSegmentFilter;