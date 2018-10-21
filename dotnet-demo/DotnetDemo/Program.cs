using System;
using System.Threading.Tasks;

namespace DotnetDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            UseCongether().GetAwaiter().GetResult();

            Console.ReadLine();
        }

        static async Task UseCongether()
        {
            var client = new Congether.SDK.DotNet.CongetherClient("test", "http://localhost/", "VvTgcJIa8I06g7Qn", "GQkjHL3WO2IQBBGjn4i0ltWrSe8SMBSv0dBagtqTWJr9JZGE", Environment.MachineName);
            await client.Initialize();

            var configValue = await client.Conductor.GetConfigurationValue<string>("simple", "nothing");
            Console.WriteLine("ConfigValue: " + configValue);
        }
    }
}
