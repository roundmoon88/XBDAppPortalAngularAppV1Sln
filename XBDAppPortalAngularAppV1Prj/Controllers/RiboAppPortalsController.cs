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
    public class RiboAppPortalsController : ControllerBase
    {
        private XBDAppPortalListBLL xBDAppPortalListBLL;
        public RiboAppPortalsController()
        {
            xBDAppPortalListBLL = new XBDAppPortalListBLL();
        }


        [HttpGet("{appId}/{appTypeId}")]
        public IEnumerable<Object> Get(int appId, int appTypeId)
        {

            var appId99 = appId;
            if (appId == 0 && appTypeId == 0)
            {
                return GetXBDAppList();
            }
            else
            {
                IList<FilterDTO> filters = new List<FilterDTO>();
                //get selected AppId
                FilterDTO filter = new FilterDTO
                {
                    Selected = true,
                    ItemId = appId,
                    FilterName = FilterEnum.App
                };
                filters.Add(filter);
                //get selected AppTypeId
                filter = new FilterDTO
                {
                    Selected = true,
                    ItemId = appTypeId,
                    FilterName = FilterEnum.AppType
                };
                filters.Add(filter);
                return GetXBDAppList(filters);
            }



        }




        private IEnumerable<XDbAppDTO> GetXBDAppList()
        {
            var ret = xBDAppPortalListBLL.GetXBDAppList();
            return ret;
        }
        private IEnumerable<XDbAppDTO> GetXBDAppList(IList<FilterDTO> filters)
        {
            var ret = xBDAppPortalListBLL.GetXBDAppListByFilter(filters);
            return ret;
        }


    }
}
