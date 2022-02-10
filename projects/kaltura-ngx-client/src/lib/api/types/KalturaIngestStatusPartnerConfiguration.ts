
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaIngestStatusEpgConfiguration } from './KalturaIngestStatusEpgConfiguration';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestStatusPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    epg? : KalturaIngestStatusEpgConfiguration;
}


export class KalturaIngestStatusPartnerConfiguration extends KalturaObjectBase {

    epg : KalturaIngestStatusEpgConfiguration;

    constructor(data? : KalturaIngestStatusPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestStatusPartnerConfiguration' },
				epg : { type : 'o', subTypeConstructor : KalturaIngestStatusEpgConfiguration, subType : 'KalturaIngestStatusEpgConfiguration' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIngestStatusPartnerConfiguration'] = KalturaIngestStatusPartnerConfiguration;