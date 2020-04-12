
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaIotDefault } from './KalturaIotDefault';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCognitoUserPoolArgs  extends KalturaObjectBaseArgs {
    iotDefault? : KalturaIotDefault;
}


export class KalturaCognitoUserPool extends KalturaObjectBase {

    iotDefault : KalturaIotDefault;

    constructor(data? : KalturaCognitoUserPoolArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCognitoUserPool' },
				iotDefault : { type : 'o', subTypeConstructor : KalturaIotDefault, subType : 'KalturaIotDefault' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCognitoUserPool'] = KalturaCognitoUserPool;