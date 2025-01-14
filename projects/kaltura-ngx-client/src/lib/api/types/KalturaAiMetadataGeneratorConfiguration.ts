
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetaFieldNameMap } from './KalturaMetaFieldNameMap';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAiMetadataGeneratorConfigurationArgs  extends KalturaObjectBaseArgs {
    isEnabled? : boolean;
	assetStructMetaNameMap? : { [key : string] : KalturaMetaFieldNameMap};
	vectorizedMetaIds? : string;
}


export class KalturaAiMetadataGeneratorConfiguration extends KalturaObjectBase {

    isEnabled : boolean;
	assetStructMetaNameMap : { [key : string] : KalturaMetaFieldNameMap};
	vectorizedMetaIds : string;

    constructor(data? : KalturaAiMetadataGeneratorConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAiMetadataGeneratorConfiguration' },
				isEnabled : { type : 'b' },
				assetStructMetaNameMap : { type : 'm', subTypeConstructor : KalturaMetaFieldNameMap, subType : 'KalturaMetaFieldNameMap' },
				vectorizedMetaIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAiMetadataGeneratorConfiguration'] = KalturaAiMetadataGeneratorConfiguration;