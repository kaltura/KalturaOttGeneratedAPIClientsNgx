
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaCloudUploadSettingsConfigurationArgs  extends KalturaPartnerConfigurationArgs {
    customAllowedFileExtensions? : string;
}


export class KalturaCloudUploadSettingsConfiguration extends KalturaPartnerConfiguration {

    readonly defaultAllowedFileExtensions : string;
	customAllowedFileExtensions : string;

    constructor(data? : KalturaCloudUploadSettingsConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCloudUploadSettingsConfiguration' },
				defaultAllowedFileExtensions : { type : 's', readOnly : true },
				customAllowedFileExtensions : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCloudUploadSettingsConfiguration'] = KalturaCloudUploadSettingsConfiguration;