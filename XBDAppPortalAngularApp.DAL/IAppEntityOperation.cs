using System;
using System.Collections.Generic;
using System.Text;
using XBDAppPortalAngularApp.DTO;

namespace XBDAppPortalAngularApp.DAL
{
    public interface IAppEntityOperationBase
    { }
    public interface IAppEntityOperation<T> : IAppEntityOperationBase
    {
        T Resolve();

    }
    public interface IAppEntityOperationGetListByFilter<T> : IAppEntityOperationBase
    {//FilterDTO
        //T Resolve(IList<FilterEnum> fiters);
        T Resolve(IList<FilterDTO> fiters);
    }
}
