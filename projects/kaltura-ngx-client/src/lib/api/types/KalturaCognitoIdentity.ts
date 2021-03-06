
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaIotDefault } from './KalturaIotDefault';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCognitoIdentityArgs  extends KalturaObjectBaseArgs {
    iotDefault? : KalturaIotDefault;
}


export class KalturaCognitoIdentity extends KalturaObjectBase {

    iotDefault : KalturaIotDefault;

    constructor(data? : KalturaCognitoIdentityArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCognitoIdentity' },
				iotDefault : { type : 'o', subTypeConstructor : KalturaIotDefault, subType : 'KalturaIotDefault' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCognitoIdentity'] = KalturaCognitoIdentity;