
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRollingDevicePolicy } from './KalturaRollingDevicePolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRollingDeviceRemovalDataArgs  extends KalturaObjectBaseArgs {
    rollingDeviceRemovalPolicy? : KalturaRollingDevicePolicy;
	rollingDeviceRemovalFamilyIds? : string;
}


export class KalturaRollingDeviceRemovalData extends KalturaObjectBase {

    rollingDeviceRemovalPolicy : KalturaRollingDevicePolicy;
	rollingDeviceRemovalFamilyIds : string;

    constructor(data? : KalturaRollingDeviceRemovalDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRollingDeviceRemovalData' },
				rollingDeviceRemovalPolicy : { type : 'es', subTypeConstructor : KalturaRollingDevicePolicy, subType : 'KalturaRollingDevicePolicy' },
				rollingDeviceRemovalFamilyIds : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRollingDeviceRemovalData'] = KalturaRollingDeviceRemovalData;