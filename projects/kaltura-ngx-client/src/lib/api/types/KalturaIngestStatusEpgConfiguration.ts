
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestStatusEpgConfigurationArgs  extends KalturaObjectBaseArgs {
    isSupported? : boolean;
	retainingPeriod? : number;
}


export class KalturaIngestStatusEpgConfiguration extends KalturaObjectBase {

    isSupported : boolean;
	retainingPeriod : number;

    constructor(data? : KalturaIngestStatusEpgConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestStatusEpgConfiguration' },
				isSupported : { type : 'b' },
				retainingPeriod : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIngestStatusEpgConfiguration'] = KalturaIngestStatusEpgConfiguration;