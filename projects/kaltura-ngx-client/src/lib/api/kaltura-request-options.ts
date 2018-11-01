
import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaSkipOptions } from './types/KalturaSkipOptions';
import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';
import { InjectionToken } from '@angular/core';

export const KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS: InjectionToken<KalturaRequestOptionsArgs> = new InjectionToken('kaltura client default request options');

export interface KalturaRequestOptionsArgs  extends KalturaObjectBaseArgs {
    acceptedTypes? : {new(...args: any[]) : KalturaObjectBase}[];
	partnerId? : number;
	userId? : number;
	language? : string;
	currency? : string;
	ks? : string;
	responseProfile? : KalturaBaseResponseProfile;
	abortAllOnError? : boolean;
	skipOnOrror? : KalturaSkipOptions;
}


export class KalturaRequestOptions extends KalturaObjectBase {

    acceptedTypes : {new(...args: any[]) : KalturaObjectBase}[];
	partnerId : number;
	userId : number;
	language : string;
	currency : string;
	ks : string;
	responseProfile : KalturaBaseResponseProfile;
	abortAllOnError : boolean;
	skipOnOrror : KalturaSkipOptions;

    constructor(data? : KalturaRequestOptionsArgs)
    {
        super(data);
        if (typeof this.acceptedTypes === 'undefined') this.acceptedTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                partnerId : { type : 'n' },
				userId : { type : 'n' },
				language : { type : 's' },
				currency : { type : 's' },
				ks : { type : 's' },
				responseProfile : { type : 'o', subTypeConstructor : KalturaBaseResponseProfile, subType : 'KalturaBaseResponseProfile' },
				abortAllOnError : { type : 'b' },
				skipOnOrror : { type : 'es', subTypeConstructor : KalturaSkipOptions, subType : 'KalturaSkipOptions' }
            }
        );
        return result;
    }
}
