
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurations } from './KalturaConfigurations';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaConfigurationsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaConfigurations[];
}


export class KalturaConfigurationsListResponse extends KalturaListResponse {

    objects : KalturaConfigurations[];

    constructor(data? : KalturaConfigurationsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaConfigurationsListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaConfigurations, subType : 'KalturaConfigurations' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConfigurationsListResponse'] = KalturaConfigurationsListResponse;