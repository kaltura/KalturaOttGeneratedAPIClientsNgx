
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRegistrySettings } from './KalturaRegistrySettings';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRegistrySettingsListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaRegistrySettings[];
}


export class KalturaRegistrySettingsListResponse extends KalturaListResponse {

    objects : KalturaRegistrySettings[];

    constructor(data? : KalturaRegistrySettingsListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaRegistrySettingsListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaRegistrySettings, subType : 'KalturaRegistrySettings' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRegistrySettingsListResponse'] = KalturaRegistrySettingsListResponse;