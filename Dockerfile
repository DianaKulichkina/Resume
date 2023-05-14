# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source
COPY . .
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm  
RUN dotnet restore "./WebUI/WebUI.csproj" --disable-parallel
RUN dotnet publish "./WebUI/WebUI.csproj" -c release -o /app --no-restore

# Serve Stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app ./

EXPOSE 44463

ENV ASPNETCORE_URLS=http://*:44463

ENTRYPOINT ["dotnet", "WebUI.dll"]