
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaHouseholdSegmentArgs  extends KalturaOTTObjectSupportNullableArgs {
    segmentId? : number;
	householdId? : number;
}


export class KalturaHouseholdSegment extends KalturaOTTObjectSupportNullable {

    segmentId : number;
	householdId : number;

    constructor(data? : KalturaHouseholdSegmentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHouseholdSegment' },
				segmentId : { type : 'n' },
				householdId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHouseholdSegment'] = KalturaHouseholdSegment;