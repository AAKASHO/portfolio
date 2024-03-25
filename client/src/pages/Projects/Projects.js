import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Recent MERN Stack projects have seen significant advancements in web development. 
        Leveraging MongoDB, Express.js, React.js, and Node.js, these projects deliver robust, scalable solutions. 
        They exhibit streamlined data management, dynamic user interfaces, and efficient server-side processing. 
        MERN Stack's versatility empowers developers to craft modern, 
        high-performing applications tailored to diverse needs
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUZGRgaHCQaHRkcGBgaHhwaHBwcHBocHBocJy4lHCErIRoZJjgmKy8xNTc2HCQ7QDs0Py40NTEBDAwMEA8QHxISHzcrJCs1NDQ0NDQ0NDQ0NDE0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMcA/QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABHEAABAgQCBAkIBwcEAwEAAAABAhEAAwQhEjEFQVHRExQiMlJhcZGhBgcXVIGSwdIWQlOTo7HwJGJzgqKy4SNDRPEzcsIV/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgIBBAEEAgMBAAAAAAAAAAECEQMSITFRFAQTIkFh8DJSoXH/2gAMAwEAAhEDEQA/AOyRHVUpBb25jLbnlC6hTCOR6W8vZ0ufNQJMk4FqQFELcpCjmcXU8WjCU7UeSspxjvI6yKoF21Z3Fu29oVxgbD4b440jzj1AJIkyQTckBdyzX5V7Qr0lVP2UruX80ar0+ToyXqIfbOx8YGw+G+DjA2Hw3xxz0k1P2UruX80ep85NUSAJUm9vr/NDxp9DyMfZ2LjA2Hw3wcYGw+G+OUp8ta8h000tQJKQUhanKWdmU9nHfDVR5eVqAFLpkJByJSsAu7fW6jDx5XQ9+NWdb4wNh8N8epnPkD4b45HI8vq1YxIpkKALOErN7WsrrHfCZfnFrMZQmRLxuQUssF0u4IKswx7ojx5j34nX+EPRPhvg4Q9E+G+OTTvOBXoTiXTISnaULAvbWY8kecKvWkqRToUkFiUoWWLA6ldY74ePMn34HWuEPRPhvgM3qPhvjkcrzjVqlYEyZZWH5LKfkuVfW1MY99IdcVFHF5eIBykpW+rUVdY74ePMj34HW+EPRPhvg4Q9E+G+ORVHl/Wo5S6aWl8ipCw+Z1m+R7oY9JdT9jJ91XzRPjzD9RBHZOEPRPhvg4Q9E+G+ONDzlVP2Mn3Vb4Ujzm1QylSR2JX80PGn0PIh2dj4Q9E+G+DhD0T4b4476UKr7OV3L+aD0oVX2cruX80PGn0PIh2di4Q9E+G+Emf1Hw3xyOT5yqxZZMqWo7AlZOywxXuQPbCleXtc+E00tyT9VeYLG4U2Z8euHjzHvwOtcYGw+G+DjA2Hw3xyYeXNeWamQXBI5K7sz/W6xCJvl/WJSFKp5YSWuQvWHH1rQ8eRPvwOucYGw+G+DjA2Hw3xzem8pq2YkKSiSXALBMwkOHGSoarvK2slJKiiTZi2GYCQSADdXXF/Dy9GK9fgbq/8Om8YGw+G+DjA2Hw3xxz0lVP2UruX80HpKqfspXcv5op40+jXyIdnY+MjYfDfBxkbD4b4456Sqn7KV3L+aD0lVP2UruX80PHn0PIh2dllzgrL4Q9HPfN75QrqjNxpSnBgbDivixO7k7BHQBGUouLpmsZKStDFXzTGCqvNnLnLXNNQsGYorICUsCouw743tXzTGIqPOTIkrVKVInEoUUEjAxKSxIdTtaLY3NP4kTUWvkRfRPK9Zme6iD0TyvWZnuoh/wBKtN6vP7pfzwelWm9Xn90v5411Z/2jLThGPRPK9Zme4iD0TyvWZnuIiR6Vab7Cf3S/ng9KtN9hP/D+eJvP+0RWH8DafNekO1ZOD5swfXdjtgX5rkqDKrJqhmxAN8nuYc9KlN9hP/D+ePfSlTfYT/w/niLz/tE1hI3omleszPcRHnonlesTPdTviZ6Uaf7Gd+F88A850j7Cd+H80NWf9oacXRD9FMr1mZf91Ps19keeieV6xM91G+JKvOPSD/jzOzDK1fzR7I85dNkKecl+qUPyVEasxOjF0RvRPK9Yme6nfHp81Ms51Mw9qU6rDXsiwHnIp/sp34fzR76R5H2M78P5otef9ojTiK30TyvWJnup3x56KJXrMz3U74nT/ObToTiMmd3S/miIPO1TEtxeofslfPFHlyp02FDE/oSPNRK9Yme6jfHnooleszPdTvhXpUpUgtTTgDmyZPjy489LdKSxp6j2iT88V9+fZPtY+g9FMr1mZ7qd8Hoplesr91O+BPnWpAS1PPBObJlAnO/Ovrzh0edOlU+KROAydQlEG+VlGHvz7J9rH0QNI+bmnp5S5y6qaEoDkpQklnawB64zXENG2/aqnaP2cH2iNTpLzgUVRJXTqkz0oUliU8Elg4PJ5RHhGblVdCEhKBpTALgBckJzZwMtbxaPqVXybsznjV/FIu9AeRFNWSzMk1c0oCig4paQXAScj1ERZK81Us51Mz3ERX+TXllRUUsypMmqUlSyvlGSVOQAWwkBmSOuLtXnNpx/sTvwvnjOXqWntLYuscKWpbi5XkAUgBNYsABh/poyZvyhE/zeY0lKqtZBz/00DIvqhpXnTpwH4Ceezg/iu0J9K9MxPAT7fw/ni3mZGv5Mr4uBO9KGfRPK9Zme4iD0TyvWZnuIhZ87lLqkTzdv9v54QfO9Ter1H4XzxHkT/sX9rH0HonleszPcRB6J5XrMz3ER4fPBTerVH4Xzw4fO3TWPFqj8K39cPIn/AGHs4+i28m/JRNApWGYpfCM+JIDYXybbi8I16Moyfk75VS69RVLRMQEWOPBfFk2EnZrjWIyjNycnbNYxUVSGKvmmOB6eQnjM/wDiL/uMd8q+aY4XpiSeMzrf7i/7jG+B02Z5VaKVUvZCCGiy4v1QlVN1R0qSOdxZAABjwy4ncWMHBkaonUvojR2V+EwCJypY2Q2qRseLKRRwf0MAvnC8Ta48XKaIk0FwcohtJWTG+GSuGH1tX6yj3hRfCdURUoKrjOHZKG2xEbbLSdInSluBth9KoYkttv2R5XMEKBUHIsIvL4ptlIvUQa2qxqbZ9WzONeLXr/WUVIYgDM675R5LUc9gYdWceyOUsE3A/OPLyScm2zdITVEgs9hqFoTJG0dbt8YewhSiS7Z6obOIkhKe2+QHtzyiif0XQtRVhdha7t1WhuQSXyvrcd3b+hEqllL5RBKQzW1jW4LwqWRKSVzNbhKRmsP1+x9USnyjSMXLYtNG6GUAVlAWbMxRr1s77MxqiaqnnN/41gDUlK7WZnAbvit0fp5BUEL/ANM4Ry0klN0gsoZjY98ovVTVhAOMlJyUDiDbQRGEsbbtm3sxa5ZS1MghRWpCkqIYFXJzd89cVamUrNyNR/QaNXLr1p5qy2rWNuRMPJrMXKWlJtsz9hBESoNFVhjfJi1rOZCc9Rb/ALtCVT2SSADv63zjYrlSlOFS0bboY7bYQ2uGk0slm4JPYMQ/tMTX4DxfkyaZQWMSuScmTZydoa8ApmIZTgXIYhQTt2HXGoVJpiWKGIvz1Zv1kta0C6WQoi60tdwsbvzirckQ8Uq5RWS5KZSAtKArXjUQTc5JS1skkP8AvbIr6ujWAlaiGXli5Bb6rvm4ufHONPVyEzEhGJRCLgDCQW1m2zqePU0icCSokFL4VDmhzne5tFFOt3yRVbM0XmqQUrnpIZsGt3LLcv127o6ojKOeeQBTimBKgrmkltoVn3eEdDRlHRjeqKYXAzV80xxTSy/2ib/EX/cY7XV80xxPS7cYm/xF/wBxjox8lZEcGFAQgCAAxqZjwTHhliEAmPQuI3JPDKhyTKRkt26gD+ceBcTKGcgCYlaikLRhCgnExEyWrJxqQR7YNsURhQS1FnW2pkh8jqfa2uK+o0dLSpipbE2sm47HzjZU1TTJad9ZJSbqJXiStDsMeWALzT/NkBBRUSQuQtKMPBrC1NjOaZWIDEouMSZjDUCNpgpyIcUYyokIRkVk7GSAGIdyDcMe9oXLkrI5OWI+BINo0dXVSFoQJ0nCQVgJQZigUqU6gOWDjUkBlElIILi4huhRS4QQiYApBUBywUqZBAHLuyhMuRkp7sxlZGQ4IhopklLqDFozVdMxLOzL4D9dcavSWmZKKjHJH+mmWtPBqSVJUtUualBUlZcpdSAb6j2xHn6bl8GUS0FAEkJQFcrg5hWsTChebGXMWkKN+a9w8UzZW1REYJOzLFgP1eFU5I2ga8odVhNxs68oVJpgsFSl4Q9gL+1j+Ucze25NHkunWsWYJfMlv1nEmn0ctxiIAbNw/Y1maJMlKEJbEVNrIA8Hj0VSiCwTfWSnJyLAsNUZXJ8Exv6I1XUIlADPWlD849JR1CKKfOUtRKi57MhsA1AbIvamlSpRUrASWu51IS+T63htFKgEj8nLukHJXbG0VWx0p1skQ6Cgxcqxcfr4Rc0ZmycRRZOaknlILbU59Ti8OSVoAYJVlhYMgEahrEPmrwYWKQChVlbSrJwxfdGm3AipcjelagKQFISULICykDEkh1JLe1L374p11U9Ac7HbCD4hTd0TlVJB5qWCQBc5Faznmc9eyGxWWASkXLO5Ks3tYNmMorSRZ22Q5Ol5z8wFs3QfmMLGnpr5J/qHfaJMmnUVLAQQQ5JJuMndKgX/AMwtKC2EizbQH3n2wcSikMCuWscpKX2OT8IbkTitWFCS9yGUAANd4lKVhD2GE2cYgQRYs7w9Kmywk4kgqzIwsGviA198UlElbgKpWHkpUw5IuggnW175eOuHzVKKGL4sikewqcA2YJyaGUS0FKhhF8gScIsWwgHVv1RLkykJQRyHKjiKhZVmJc52IF3yzjmk4p8ENJGz82kwKVOIHQ7frZjVHTEZRzTzbJSFzsBBBwnk5C6yw7846WjKOjF/FFUMVfNMcO00v9onfxF/3GO41fNMfPWnKlfGqgPYTVjIdMx04uWVnwSRMhaZsVKaojnDu/zDnG0bT3RtszK2Womx7woilm6Rbmh+s5d2cRVVy353cAIaRZpMQhynZy+H+YkdzRmxpBe1+0CJ+j61K8YWGIQpSTiCQVDIXuddhclusiNIsvEgBv8AxnL6ynzZ4SalAUByL/vG0RJRllIUVsMGJXLlhl3ZIfWQObm5uwvFZpFUsJxS1knEABwiFHmnGcIAOHFYKyN8rPVtIWXVXNTZzLDKH1izF0nPWPyiNTaRQEJCjLHJAPKU6XSGtryuIzgmKVcmEFF84zcuhZYVlQgrxYEKdi4UpsmALZZC0NcKC3+mjvVlnrPjDSkNqj05WjFysm6FrVjISiWARmxUdXXlExICEBJDKNyxy2frriNo9LqJJbD3v/08SJyQoFQUbbYzk96IbIqvb+d4WDZLbPiuGVzgmwAc26+rsh6XWISnloJIGoDNza5z3xaPJridO2LWb/rqgBufZ/YmGFaZRqkrPsEeK0yE82STiydw1gCnLV8Y0o31In8IWtszH66oj6QJwoCtiv7i0M//ALqvsUC93JPwF84r9I6VVMw2CVDUGY3JDZ3vENFlNfZLmziW7L+yClXhIs9zZs7N7O2KtM1RSA1y5xMG6vZE7RUlRWnEksS5bCn2A7dxiN73JlKNbdFvRqfEQm4UWHJ1tZ8zlqh9ctsTlwbNkQc7BtQDZ3eESUIBULlYXZnKTlre8NTmxMpRfbqHUY0OcYWlwXBU1+pviYcp5Tl7FIu5ybYOuCZLGFitShrULFwNWx4J844QkAtkATcsTt2tGOSVbIrKVIF1THEoXBsLnWNY/WUWC60KHN5QGs3B2eD90VqZZSeThvmCSr8+0dV/bCUoIKiFB3xOWAvs/KOVxT4KR4Oi+atJxz+so/8AuOpoyjlXmonYzPOt0DuxtqjqqMo6sd6FZquBir5pj5304Wqqj+Mv+8x9EVfNMfO/lDTKNVPISf8Ayr1/vmN4FZkXCDCeDEJ4GZsPhCuCma0/lGtMzG1SY9TLBzsYXwMzo+Ijw08w/VPeIsrA2ZfXErR+j1TVEJIGEPd/BoY4tM6HiIl0EydKJKUC4Yvf8iI0xuNrVwZZlPQ/b5+iwX5NzzZ09yt0Rz5KzhcqSO0K3QmZ5TTxY4baiFfNHiPKieqyig9TKOT7VRdy9K92mcWn1tcoqZ6CglGZSognU4JBbqtHqLAXMeTypalLNnJUW2k7zCZi9Q9kedKr2PQjdK+R5FzCFqNgG72jxa2Jvf8ATxHWtjFUixYUjBCiM3Yn9e2PFrYZ2zA7dsIpV8gubvl7LfrrhmYAwzJilfIrVsSpeoZC+X5a4QU5uc3t4t1QE7PZ+tcKRKJLqyGq4i/BpwJCCoMLjXnltiZSUpWggPiSSx2lhsycAX64hiZdkjU4bqzi20EhQUpRysGuC7i+TNuguS0WNS6VKgA1iHv1uzv+rQlNEGskXLP7Wi24DApYa2It7SFD+6FyAMiPrfHfENuzqhpooqelZZS1lAB2Ds5Lj264fppeFZSFqBSf3SnBY5EZs/tixRT4p4LBkpL3vziA23MR7pKnKZiVlgkpKbp2ZWYvfXFot1ZnOraIiEFeNRWRyiGGG9g1my64XJ5DIDsTfWz3e9+6E085PLDOSS3Nz1kgaobVPDB7nv8AENBtlUhZWQkhXKINicOT9UVy1uoa9Xh/1DqprjJyzZKJ8IYXIUXZJy9kZyjvZnONuxc6oZZIJFhfNyP83hpdYBiCbktnkOq+z4x4t3Gajh8YhqL2AG1z7MtkVUUVijqXmXW5qLdD/wC47CjKON+ZUcqp/k1v047IjKNkaIYq+aY4ZpkftE7+Iv8AuMdzq+aY4Zpk/tE7+Iv+4xrj5KzIgTCgI8Co9BjYzPYHgeB4A9eAr6jHjwoGAIk2jQX5MRFUKUuQBa7RbkxHWkGxiKQK0oxBNwl2yG0E6+yEGmUz4tbc1HSwxKnU6Q2duvYLQqXITs/PfFVBMWQhSqxKAUXS31E6x1ZQzMlthL2UQHwJyIdxa8WipCdg7v8AMMT6dH6BiJQolMjqlpSFYVm1+YgZ7RqyMMTJ6Q4ClOHvgQE2fqzYQ6ZSWb5t0IWgN/3GNpMsmiIjSC+k3sG3siVJrDysUxWbBiRl2QwqSP00GFn/AMQtFth8Vg+1XltUP8R7IruWwWoPrJJtaxeIhh6mI1xNklxT1ScitPOJZ21Jyiwp6Za3KUKIfMZajmbRn0Tmfth+TpBSclqH8xiG10XSfZp5WiFqLqKEWa6y7XfmwVGh0XK6hI7AQ225N4zIrMSmUVG3SV19cM1CUGzW7TvhZDW5oOI0iOdPJzOb59giNPqKVHNxKPUm3tJMZ9EpDWDN1nbCFSku7QBZz9MpHNlgdqvg3xivnaVmF2wgZWG94iqkiE4ANUGyByXVWOJXKJysNWcJxBhe+sQ3wYd48SwAHf8AlFaRTSrOreZlnqGDDkf/AHHYEZRx7zLqc1H8mzYuOwoyiVwWQxV80xXy9A0qgFKppKlKuVGWgkk3JJIuYsavmmFU3MT2CJskgfRyk9VkfdI3QfR2k9VkfdS90WkELZFIq/o7SeqyfukboPo7SeqyfukbotIIWxSKv6O0nqsn7pG6D6O0nqsn7pG6LSCFsUir+j1J6tJ+7Rug+jtJ6rI+6l7otIIWxSKlXk3RnOlkfdI3REOi9HpUUmmp0kFuVJQkOwNiUscxltG2NDEWZQy1ElSEkkuX1lm/KJtikVI0do4luBpbgEHg5TFyocksxLpNhHs3ROjw+KRTBi3KlyxfCFWcXsQbRJOi5LJBkPhTgBZJOFmIcl2IJEPTKSWpRUqU6tpAOacJ1tkGPshbFIq//wAbRhypqQ2KuTLlGyQ5NhCDofRgwE01KAtONJVIlgFPJu5TbnJz2xbS6SWlwmSzpwkMlim7pz6z3wrikvCEcDyeiyWF8e3pB+2IFIqhoTRbkcWo3Ac/6cmwci9tqT3Q2vQ+ig/7NSFkqWWkylMlPONgcvhFumhlBiJIBGTBNnuWv1mBFHLSC0lgUlJACbpPODPkWHhAmipRoTRRAPF6JiAbypILFmcEOMxntj1WhNFggcXo3JZhKk532C3NPcYtaiklruqSSc8k7Sb36z3naY9TQSiMPAAJOopS1nawP7yu+AK6R5M6OWHRSUqhrKZUo5gEZDYQfaIe+iVB6jTfcS90WtPTIQ+FIDs7dQAHgBD8BZSDyToB/wAKm+4l7o9PknQ+pU33EvdF1BAFJ9E6H1Km+4l7o8+iNB6jTfcS90XkEAUf0QoPUab7iVujz6IUHqNN9xK+WL2CAKL6IUHqNN9xK+WPfohQeo033Er5YvIIApafRFPTqHASJcrFzsEtCMTZPhAdnPeYuEZRFq+ej2/CJSMoAZq+aYVTcxPYITV80wqm5iewQA9BBBABBBBAHkEYeZVrClAqUeUbgkay1njyfpHg2K1rTiycqvFdSLaTcx7HOJukZZdXCTcTFilUxgTnycj3hoXTaVUEhKROWwzdV/atZUfa8SnZDVHRI8eMNJqKlfMlL2cpahfsaISK6eualBWwJILKVqBOb9UG6CVnRoIy2kZiuKpIWoETkh8Rc8oBnES9NSaeasSZqpiZhSFJMtc1CmOIDlSzfmmynELBdKlJJci8ecXTs8TGBV5M1MtWOir1TCn6kyYVEbQTdKuxSR2x7J8sp8yWUlARNSWK0sUkBweSp2LttGcSQbzi6Nn564cQgAMMo5dUVc5YK5k+ZhAckLUkAbcKGHhFZjXMSVoqJpS7PjmDLOxMCDs8eRyzRSpglJeasnjOZWs2wS7OTlnbrjUacqFpnqAUcLJYAkNa+WcQ3RZKzVwRh11qkpK1KWEjMuph3RFm6VlrbEtZGxCpidbi6X1xGpfROlnQoI5zTaVKcTKnLxF819wxrYarACJUqtnrLIlTP5lqFvYDFkVN5BHOtJV9Sh0nkKZ2xKJD5a41OgMQKgpRUyRmSdfXFU7dFnGlZewQQRYqEEEEAQ6vno9vwiUjKItXz0e34RKRlADNXzTCqXmp7B+UJq+aYVS81PYPygB6CCCACCCCAMVpuaUIWtCU4g5uLOxN/bGdoNIrqKbhpuF0EnCBsA3xdaamBaVoTtUHNgMxmWjMUNMuXTLkrXLAU5KkqUpgwvkBqOuKzxtvY0xyilb5L+jnp4vif/cSMISk2K0k8ohxF2K2RwnIKiwUk4QAcQKbcluuOdSfKFCEGXgUpOJ8YUApwXBYggZQS9IUyiSDUIJJJImrzJc5K+EXjFpLczemTdnSaOslusYZhZZyUq1k5kqAjLLWDMDZFZZyMiT+vbGUnSVLWoCa8lawVgrXjWEiwUpVjsZ2AMKrOGPK4JZlpshKClTBAsH7duTRhknT3OrFhi1afP1+DfeUU9QokKS6TxqUNTsZyUnJ7EExZ6Y0TMmVKJ6ZyUpQkJKSrCoqClKzYhuUBlqjN+UVcpWjBMUSpSKiWq9nwrSoJ6hGPXp8qUpSZaUlSiouXupRUeYEk3Ou/XGkblFWcz2Zt16AWmqlThPp8CVha3mnEWU5wjC2TBn2xjNG6YmLXNKad0IUcaxMDJSVrSlWEhy6ktbb3iNMTDksJ6gH/vxGE0lGgYsIAx85rYr4uU2d79sSlSoq3e4io09jE9ICiEjCwAUwxofs/wAxZeTM0KpnY89WYIhmXIMnEZaigqYqKGGJnZ9uZ74e0l5PzZqErXUzUzBcIcoSRYgKUlIL9d2eEpfGkEt9zWeTMqUtRkzH4RKuGwh2CWQkKWRzXILJJBLHYYvNNAYlFgSAG7o5PL0fXImoVhVhWtGMpnJIKcY5wCgVBibMY6lp6eAtSblRSLAdW3KKYdUl8luXnUXsZLRelJtRMnyF4EoTYMkuxbrzvE3QM9JXMvhwpOSUqcoJAsQ3tinoKdcmfNmAy2XkMZJGWYSDsiDK0ummWsAcIS+IvhAJJcDN2dvZCOKSlbNJSjppG6o62SJUkEnGyFEABwHZ3AeJgrJfCXEwuiwdb87/ANo5sNKU6yCoT0qACXTMUGCcgyVAeEN1q1KUFU89QUEqS8xcxShisQg3CXGZzjWTaRlGMZM2Gn5yVTFYQeaOcQ4Lay56tcaHyXVmGNkJ5VmPYxjlq5MxKBLkoUpCRiWUrBUpZYFRGY1m3VG783NUtSVSyFpCE2QoAFPLVmwGfVqaMIzuX/Tpy4lGNp2vo3cEEEbHKEEEEAQ6vno9vwiUjKItXz0e34RKRlADNXzTCqbmJ7BCavmmFU3MT2CAHoIIIAIQHc7NXxhcEAZOr8jJa1FfDTEkknNxcvkp4aV5DoUCFz1qBDNhSnPa1zGgq0zCoYES1pYOVKUkg3yZJsxhMs1AAGCSBbJa7W/9L37ItqdckbmQX5r5JFp8wHawL98N+iuX61M9xEdFgipaznqfNggZVUz3URb6H8jhTpUkT1rCiDykpsQGOW23dGrgiGk+SVJrgzemvJdFRTrpzMUgKmBeJIDghizGzWjOI81UsZVUz3ER0Xf8IraeTOCnUmSRZsJWCBcKzBezNlriUkkUbbdmUR5spY/5K/cREyV5AoT/AL6/dTG0ggSZAeRCHB4Zdv3U5w6ryPBL8YX3DfGqgiKBnpXk2E4XmlWG90JuxePdMeTSKlZWpa0lgGSbWGw28IvjEWslrKeQEkvkpwGYjVrv+cWW3AZmx5Epy4xMb/1S/vRCnebOQoqImrDl7XbvMaqUmeAWRJSXBYKWQelfCGOTFjEmmVML8IEDZhUpT7XdIbx9kG2wjB+iuX61M91EKT5rkD/lTPcRHQ4IgmzF6J8gxImYxUzFWIKSlIBB7OwRo6LRolqxYnJThybW+qLGPIjSrsnVKqs8Q+vb4aoXBBElQggggCHV89Ht+ESkZRFq+ej2/CJSMoAZq+aYVTcxPYIKhLiKeomz02SpgMuSk/CAL6CM1xqp6f8AQndBxqp6f9Cd0AaWCM1xqp6f9Cd0HGqnp/0J3QBeTUEsQHs3OUnPqHbCRJOy/wDEWdu+KTjNT0h7id0HGanpD3E7oAuuBPR/EX8RHvBK6P4i9eeqKTjNT0h7id0HGanpD3E7oAvhIDXcdQUpoVwA2q99W+M/xmp6Q9xO6DjNT0h7id0AaTf8IiiUdn4i9fsil4zU9Ie4ndBxmp6Q9xO6ALvgldEe+vd+rwCUej+Ivd1CKTjNT0h7id0HGanpD3E7oAu+CVss/wBot+0Wh0046/eVvjP8ZqekPcTug4zU9Ie4ndAGgTLAcgnLWSfAwTkkiwe/SKdW0Rn+M1PSHuJ3QcZqekPcTugC74E60/iLgMpWzumL72aKTjNT0h7id0HGanpD3E7oAu+CU2X4i90LTKd8QbsWo7ooeM1PSHuJ3QcZqekPcTugDQcXH73vK3wpAa1/aSfExneM1PSHuJ3QcZqekPcTugDTQRmuNVPT/oTug41U9P8AoTugDSwRmuNVPT/oTuj0VNT0/wChO6ALir56Pb8IlIyispcaiCsuR1AflFmIA9IhHBCCCAPOBGyDgRsgggA4EbIOBGyCCADgRsg4EbIIIAOBGyDgRsgggA4EbIOBGyCCADgRsg4EbIIIAOBGyDgRsgggA4EbIOBGyCCADgRsg4EbIIIAOBGyDgRsgggA4EbIOBGyCCADgRsg4EbIIIAOBGyDgRsgggA4EbIOBGyCCAFJlgQuCCAP/9k="
                    alt="project1"
                  ></img>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Estate Real
                    </h6>
                  </div>
                  <div>
                  Buy and Sell properties Online.....
          Enhanced the user experience with image uploads, property listing management cutting-edge search features to help users find what they’re looking for.
                  </div>
                  <a
                    className="ad-btn"
                    href="https://mern-estate-g4qv.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://static.toiimg.com/thumb/msid-106162947,width-1280,height-720,resizemode-4/106162947.jpg"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">NodeJs</span>
                  <span className="card-detail-badge">Socket.io</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">GoodSpace Chat</h5>
                  </div>
                  <div>
                  Developed a real-time chat application using 
                  socket programming, allowing users to register, 
                  log in, and engage in instant messaging with other users.
                  </div>
                  <a
                    className="ad-btn"
                    href="https://goodspaceassignmentakash.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">DELL-E</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Firebase</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Open-AI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Crea8Gen</h5>
                  </div>
                  <div>
                  AI image generator web app for content creators, enabling them to effortlessly generate creative content
                  with a few clicks
                  </div>
                  <a className="ad-btn" href="https://github.com/AAKASHO/Cre8Gen">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
