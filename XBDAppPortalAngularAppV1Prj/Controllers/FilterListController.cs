using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XBDAppPortalAngularApp.BLL;
using XBDAppPortalAngularApp.DTO;

namespace XBDAppPortalAngularAppV1Prj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilterListController : ControllerBase
    {
        private XBDAppPortalListBLL xBDAppPortalListBLL = new XBDAppPortalListBLL();

        [HttpGet("{filterInd}")]
        public IEnumerable<FilterDTO> Get(int filterInd)
        {
            if (filterInd == 1)
            {
                //App filters get
                var ret = xBDAppPortalListBLL.FilterGet(FilterEnum.App);
                return ret;
            }
            else
            {
                //App Type filters get

                var ret = xBDAppPortalListBLL.FilterGet(FilterEnum.AppType);
                return ret;
            }

        }
    }
}
