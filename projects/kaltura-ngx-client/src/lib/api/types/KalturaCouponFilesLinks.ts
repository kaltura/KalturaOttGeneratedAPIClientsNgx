
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCouponFilesLinksArgs  extends KalturaObjectBaseArgs {
    totalCount? : number;
	objects? : KalturaStringValue[];
}


export class KalturaCouponFilesLinks extends KalturaObjectBase {

    totalCount : number;
	objects : KalturaStringValue[];

    constructor(data? : KalturaCouponFilesLinksArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCouponFilesLinks' },
				totalCount : { type : 'n' },
				objects : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCouponFilesLinks'] = KalturaCouponFilesLinks;