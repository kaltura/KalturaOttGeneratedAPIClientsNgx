
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';

export interface KalturaPermissionItemByParameterFilterArgs  extends KalturaPermissionItemFilterArgs {
    parameterEqual? : string;
	objectEqual? : string;
}


export class KalturaPermissionItemByParameterFilter extends KalturaPermissionItemFilter {

    parameterEqual : string;
	objectEqual : string;

    constructor(data? : KalturaPermissionItemByParameterFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemByParameterFilter' },
				parameterEqual : { type : 's' },
				objectEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPermissionItemByParameterFilter'] = KalturaPermissionItemByParameterFilter;