
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeviceReferenceDataFilter, KalturaDeviceReferenceDataFilterArgs } from './KalturaDeviceReferenceDataFilter';

export interface KalturaDeviceManufacturersReferenceDataFilterArgs  extends KalturaDeviceReferenceDataFilterArgs {
    nameEqual? : string;
}


export class KalturaDeviceManufacturersReferenceDataFilter extends KalturaDeviceReferenceDataFilter {

    nameEqual : string;

    constructor(data? : KalturaDeviceManufacturersReferenceDataFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeviceManufacturersReferenceDataFilter' },
				nameEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeviceManufacturersReferenceDataFilter'] = KalturaDeviceManufacturersReferenceDataFilter;