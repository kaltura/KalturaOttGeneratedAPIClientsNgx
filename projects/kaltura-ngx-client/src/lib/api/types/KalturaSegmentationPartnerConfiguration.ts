
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSegmentationPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    maxCalculatedPeriod? : number;
	maxDynamicSegments? : number;
}


export class KalturaSegmentationPartnerConfiguration extends KalturaObjectBase {

    maxCalculatedPeriod : number;
	maxDynamicSegments : number;

    constructor(data? : KalturaSegmentationPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentationPartnerConfiguration' },
				maxCalculatedPeriod : { type : 'n' },
				maxDynamicSegments : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSegmentationPartnerConfiguration'] = KalturaSegmentationPartnerConfiguration;