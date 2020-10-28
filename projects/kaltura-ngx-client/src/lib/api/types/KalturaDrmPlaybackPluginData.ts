
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmSchemeName } from './KalturaDrmSchemeName';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaPluginData, KalturaPluginDataArgs } from './KalturaPluginData';

export interface KalturaDrmPlaybackPluginDataArgs  extends KalturaPluginDataArgs {
    scheme? : KalturaDrmSchemeName;
	licenseURL? : string;
	dynamicData? : { [key : string] : KalturaStringValue};
}


export class KalturaDrmPlaybackPluginData extends KalturaPluginData {

    scheme : KalturaDrmSchemeName;
	licenseURL : string;
	dynamicData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaDrmPlaybackPluginDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmPlaybackPluginData' },
				scheme : { type : 'es', subTypeConstructor : KalturaDrmSchemeName, subType : 'KalturaDrmSchemeName' },
				licenseURL : { type : 's' },
				dynamicData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDrmPlaybackPluginData'] = KalturaDrmPlaybackPluginData;