FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /App
COPY . ./
RUN dotnet restore
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm      
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /App
COPY --from=build-env /App/out .
ENTRYPOINT ["dotnet", "webui/bin/release/net6.0/webui.dll"]