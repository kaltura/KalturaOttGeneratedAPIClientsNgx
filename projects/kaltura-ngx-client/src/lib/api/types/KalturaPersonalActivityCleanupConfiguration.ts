
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPersonalActivityCleanupConfigurationArgs  extends KalturaObjectBaseArgs {
    retentionPeriodDays? : number;
}


export class KalturaPersonalActivityCleanupConfiguration extends KalturaObjectBase {

    retentionPeriodDays : number;

    constructor(data? : KalturaPersonalActivityCleanupConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalActivityCleanupConfiguration' },
				retentionPeriodDays : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPersonalActivityCleanupConfiguration'] = KalturaPersonalActivityCleanupConfiguration;