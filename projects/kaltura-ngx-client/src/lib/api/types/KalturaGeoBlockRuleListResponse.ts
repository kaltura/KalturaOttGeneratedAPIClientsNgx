
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoBlockRule } from './KalturaGeoBlockRule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaGeoBlockRuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaGeoBlockRule[];
}


export class KalturaGeoBlockRuleListResponse extends KalturaListResponse {

    objects : KalturaGeoBlockRule[];

    constructor(data? : KalturaGeoBlockRuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaGeoBlockRuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaGeoBlockRule, subType : 'KalturaGeoBlockRule' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGeoBlockRuleListResponse'] = KalturaGeoBlockRuleListResponse;