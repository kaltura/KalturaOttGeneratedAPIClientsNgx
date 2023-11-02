
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaUploadSettingsConfigurationArgs  extends KalturaPartnerConfigurationArgs {
    allowedFileExtensions? : string;
}


export class KalturaUploadSettingsConfiguration extends KalturaPartnerConfiguration {

    allowedFileExtensions : string;

    constructor(data? : KalturaUploadSettingsConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadSettingsConfiguration' },
				allowedFileExtensions : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUploadSettingsConfiguration'] = KalturaUploadSettingsConfiguration;