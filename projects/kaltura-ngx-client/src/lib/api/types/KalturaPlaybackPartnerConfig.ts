
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDefaultPlaybackAdapters } from './KalturaDefaultPlaybackAdapters';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaPlaybackPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    defaultAdapters? : KalturaDefaultPlaybackAdapters;
}


export class KalturaPlaybackPartnerConfig extends KalturaPartnerConfiguration {

    defaultAdapters : KalturaDefaultPlaybackAdapters;

    constructor(data? : KalturaPlaybackPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackPartnerConfig' },
				defaultAdapters : { type : 'o', subTypeConstructor : KalturaDefaultPlaybackAdapters, subType : 'KalturaDefaultPlaybackAdapters' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlaybackPartnerConfig'] = KalturaPlaybackPartnerConfig;